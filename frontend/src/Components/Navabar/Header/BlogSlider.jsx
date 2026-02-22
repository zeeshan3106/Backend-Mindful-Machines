import './PopularSlider.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './CateSlider.css'
import ProductItem from './ProductItem';
import BlogItem from './BlogItem';



function BlogSlider() {
  return (
   <div className='Slider'>
      

                <Swiper

                 breakpoints={{


          0:{slidesPerView:1,
            spaceBetween:0
          },
          800:{slidesPerView:2},
          1024:{slidesPerView:4}




        }}





        slidesPerView={4}
    
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper">
       
            <SwiperSlide>
               <BlogItem/>
            </SwiperSlide>
            
             <SwiperSlide>
                <BlogItem/>
            </SwiperSlide>

             <SwiperSlide>
                 <BlogItem/>
            </SwiperSlide>

 <SwiperSlide>
                 <BlogItem/>
            </SwiperSlide>
             <SwiperSlide>
               <BlogItem/>
            </SwiperSlide>
 <SwiperSlide>
            <BlogItem/>
            </SwiperSlide>


 <SwiperSlide>
        <BlogItem/>
            </SwiperSlide>
 <SwiperSlide>
                <BlogItem/>
            </SwiperSlide>

 <SwiperSlide>
        <BlogItem/>
            </SwiperSlide>

 <SwiperSlide>
               <BlogItem/>
            </SwiperSlide>





            

       

        </Swiper>
              
            
            
            
            
            
            
           



    </div>
  )
}

export default BlogSlider