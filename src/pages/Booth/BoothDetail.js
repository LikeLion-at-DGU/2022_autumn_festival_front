import React from 'react';
import { SwiperContainer } from './style';

// External Libraries //
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

SwiperCore.use([Pagination, Autoplay]);

export default function BoothDetail() {
  return (
    <>
      <SwiperContainer>
        <Swiper
          className="banner"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500 }}
          style={{ height: 300 }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </>
  );
}
