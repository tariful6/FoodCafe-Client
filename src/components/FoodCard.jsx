import React from 'react';

const FoodCard = ({item}) => {
    const {name , image, price, recipe} = item;
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
            <button className="btn btn-primary">Add to cart</button>
            </div>
        </div>
        </div>
    );
};

export default FoodCard;