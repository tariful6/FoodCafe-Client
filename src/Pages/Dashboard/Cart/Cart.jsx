import axios from "axios";
import useCart from "../../../hooks/useCart";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item)=> total + item.price,0)
    console.log(totalPrice);

    const handleDelete = id =>{
        console.log(id);
        axios.delete(`http://localhost:5000/carts/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0){
                alert("deleted success")
                refetch()
            }
        })
    }
    return (
        <div className=" w-[100%]">
            <div className=" w-[100&] flex justify-evenly">
                <h2 className=" text-4xl">Items : {cart.length}</h2>
                <h2 className=" text-4xl">Total Price : {totalPrice}</h2>
                <button className=" btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map((item, index) => <tr key={item._id}>
                        <th>
                        <label>
                            {index + 1}
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img src={item.image}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                        
                        </div>
                        </td>
                        <td>
                        <span >{item.name}</span>
                        </td>
                        <td>{item.price}</td>
                        <th>
                        <button onClick={()=>handleDelete(item._id)} className="btn  btn-secondary">X</button>
                        </th>
                    </tr>)
                    }

                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default Cart;