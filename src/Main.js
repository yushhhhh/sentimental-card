import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);

class Main extends Component {
  render() {
    return (
      <>
        <div>
          <Swiper className='banner' spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </>
    );
  }
}

export default Main;
