import { useEffect } from 'react';
import InnerImageZoom from 'inner-image-zoom';
import 'inner-image-zoom/lib/styles.min.css';
import img1 from '../Components/1.jpg';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';






function ProductZoom() {
  useEffect(() => {
    new InnerImageZoom('#zoom-container img', {
      zoomScale: 0.9,
      moveType: 'drag'
    });
  }, []);

  return (
    <div id="zoom-container">
      <img src={img1} />
    </div>
  );
}
export default ProductZoom