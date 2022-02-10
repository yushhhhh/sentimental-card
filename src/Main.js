import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

class Main extends Component {
  render() {
    return (
      <>
        <div className='main-slider'>
          <Swiper className='banner' spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
            <SwiperSlide>
              <div className='img-bx'>
                <img src='assets/images/main/slide1.jpg' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img-bx'>
                <img src='assets/images/main/slide2.jpg' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img-bx'>
                <img src='assets/images/main/slide3.jpg' />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
  }
}

export default Main;
