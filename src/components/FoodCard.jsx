import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';

const FoodCard = ({item}) => {
    const {user} = useContext(AuthContext)
    const {name , image, price, recipe, _id} = item;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()
                 
     const handleFoodCard = (id) => {
        if(user && user?.email){
        const cartItem = {
            menuId: id,
            email : user.email,
            name,
            image,
            price,
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
           if(res.data.insertedId){
            alert(`${name} -- added successful`)
            refetch()
           }
        })
        }else{
            alert("sorry")
            navigate('/signIn', {state : {from : location}})    
        }
    }

    return (
        <div className="card bg-base-100 w-full shadow-sm">
        <figure>
            <img className=' w-full'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p> Price : {price} tk</p>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
            <button  onClick={()=> handleFoodCard(_id)} className="btn btn-primary">Add to cart</button>
            </div>
        </div>
        </div>
    );
};

export default FoodCard;