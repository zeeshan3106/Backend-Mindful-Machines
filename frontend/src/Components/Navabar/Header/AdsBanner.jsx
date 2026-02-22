import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Link} from 'react-router-dom'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import './AdsBanner.css'
import img101 from './Images/Banners/103.jpg'
import  img102 from './Images/Banners/smartwatch-fitness-tracker-displaying-health-data.jpg'


function AdsBanner() {
  return (
    <div className='Slide'>

        <Swiper

        breakpoints={{


          0:{slidesPerView:1,
            spaceBetween:0
          },
          800:{slidesPerView:2},
          1024:{slidesPerView:3}




        }}
      
                slidesPerView={1}
                spaceBetween={-150}
          
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation]}
                className="mySwiper"
               
              >
                
                <SwiperSlide >
                  <Link className=''>
                  <div className='Banner1'>
                    <img src={img102}></img>
         
                  </div>
        </Link>
                </SwiperSlide>




                  <SwiperSlide>
                  <Link className=''>
                  <div className='Banner1'>
                    <img src={img102}></img>
         
                  </div>
        </Link>
                </SwiperSlide>


                  <SwiperSlide>
                  <Link className=''>
                  <div className='Banner1'>
                    <img src={img102}></img>
                  </div> </Link></SwiperSlide>



                 
                



                </Swiper>




    </div>



  )
}

export default AdsBanner