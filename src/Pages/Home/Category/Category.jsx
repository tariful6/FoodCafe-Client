


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';


import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';
const Category = () => {
    return (
        <section className=' container mx-auto'>
            <SectionTitle heading={"From 11.00am to 10.00pm"} subHeading={'Order online'}></SectionTitle>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={slide1} className='w-full' alt="" />
                <h2 className=' text-4xl uppercase text-center -mt-16'>Salad</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} className='w-full' alt="" />
                <h2 className=' text-4xl uppercase text-center -mt-16'>Salad</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} className='w-full' alt="" />
                <h2 className=' text-4xl uppercase text-center -mt-16'>Salad</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} className='w-full' alt="" />
                <h2 className=' text-4xl uppercase text-center -mt-16'>Salad</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} className='w-full' alt="" />
                <h2 className=' text-4xl uppercase text-center -mt-16'>Salad</h2>
            </SwiperSlide>
          </Swiper>
        </section>
    );
};

export default Category;