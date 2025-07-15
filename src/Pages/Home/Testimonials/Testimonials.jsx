
import SectionTitle from '../../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
        useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data =>  setReviews(data))
    },[])
    


    return (
        <div className=' container mx-auto'>
            <SectionTitle heading={"What our client say"} subHeading={"Testimonial"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className=' my-24 mx-32  flex flex-col items-center text-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review?.rating}
                                readOnly
                            />
                            <p className=' py-3'>{review?.details}</p>
                            <h3 className=' text-2xl text-orange-500'>{review?.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
                
         
            </Swiper>
        </div>
    );
};

export default Testimonials;