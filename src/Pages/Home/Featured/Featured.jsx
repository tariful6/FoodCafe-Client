import React from 'react';
import SectionTitle from '../../../components/SectionTitle';

import featured from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featureBg mb-20 pt-10 bg-fixed'>
            <SectionTitle subHeading={"check it out"} heading={"Featured Item"}></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 container mx-auto'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className=' uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos tenetur omnis nisi fugiat atque qui velit eligendi voluptas, quasi incidunt nulla vero ipsa, enim minima. Amet aliquam commodi, saepe voluptatem veniam omnis facilis dicta, nam necessitatibus doloremque doloribus ullam similique?</p>
                    <button className=' btn btn-outline'>Order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;