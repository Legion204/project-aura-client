import slider1 from "../../assets/slider1.jpg"
import slider2 from "../../assets/slider2.jpg"
import slider3 from "../../assets/slider3.jpg"
import slider4 from "../../assets/slider4.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute flex flex-col items-center justify-center h-full w-full z-10 text-center space-y-5">
                            <h1 className='font-extrabold text-5xl xl:text-8xl text-forth font-Poetsen'>Project Aura</h1>
                            <p className="xl:text-3xl text-white">Where Every Meal Makes a Difference. Join us in reducing food waste and nourishing those in need.</p>
                        </div>
                        <img src={slider1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute flex flex-col items-center justify-center h-full w-full z-10 text-center space-y-5">
                            <h1 className='font-extrabold text-5xl xl:text-8xl text-forth font-Poetsen'>Project Aura</h1>
                            <p className="xl:text-3xl text-white">Transforming Surplus into Hope. Together, we are fostering food security and building vibrant communities.</p>
                        </div>
                        <img src={slider2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute flex flex-col items-center justify-center h-full w-full z-10 text-center space-y-5">
                            <h1 className='font-extrabold text-5xl xl:text-8xl text-forth font-Poetsen'>Empowerment Through Sharing</h1>
                            <p className="xl:text-3xl text-white"> Project Aura unites individuals and businesses to create a sustainable food ecosystem. Join the movement today!</p>
                        </div>
                        <img src={slider3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute flex flex-col items-center justify-center h-full w-full z-10 text-center space-y-5">
                            <h1 className='font-extrabold text-5xl xl:text-8xl text-forth font-Poetsen'>Project Aura</h1>
                            <p className="xl:text-3xl text-white"> Illuminating the Path to Food Equity. Together, we are sowing seeds of change and harvesting compassion in our communities.</p>
                        </div>
                        <img src={slider4} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;