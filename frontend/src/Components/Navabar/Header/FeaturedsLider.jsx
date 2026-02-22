import './PopularSlider.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './CateSlider.css'
import ProductItem from './ProductItem';


function FeaturedsLider(props) {
  return (
    <div className='Slider'>
      

                <Swiper
        slidesPerView={5}
        spaceBetween={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper">
            <SwiperSlide>
                 <ProductItem/>
            </SwiperSlide>
        




            

           

        </Swiper>
              
            
            
            
            
            
            
           



    </div>
  )
}

export default FeaturedsLider