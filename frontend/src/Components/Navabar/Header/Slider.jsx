
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css'
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';
import img4 from './Images/4.jpg';
import img5 from './Images/5.jpg';
import img6 from './Images/6.jpg';
import img7 from './Images/7.jpg';




function Slider() {
  return (
    <div className='Pic'>
     <div className='pic'>
     <div className='container1'>
   <Swiper
  navigation
  modules={[Navigation, Autoplay]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  className="mySwiper"
  
>
       
        <SwiperSlide><img className="Image-Border" src ={img1}/></SwiperSlide>
        <SwiperSlide><img src ={img2}/></SwiperSlide>
        <SwiperSlide><img src ={img3}/></SwiperSlide>
        <SwiperSlide><img src ={img4}/></SwiperSlide>
        <SwiperSlide><img className="Image-Border"  src ={img5}/></SwiperSlide>
        <SwiperSlide><img className="Image-Border" src ={img6}/></SwiperSlide>
        <SwiperSlide><img className="Image-Border" src ={img7}/></SwiperSlide>
      </Swiper>
      </div>
      </div>
  </div>

  )
}

export default Slider