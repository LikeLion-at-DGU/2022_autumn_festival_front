import React, { useState } from 'react';

import {
  SwiperContainer,
  ContentContainer,
  TypeBtn,
  BoothTitle,
  BoothIntro,
  LikeCnt,
} from './style';
import NoticeExImg from '../../assets/img/noticeExImg.png';
// import BoothDetailMap from '../../assets/img/boothdetailMap.png';
import { UpTitle } from '../../styles/style';

// External Libraries //
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

SwiperCore.use([Pagination, Autoplay]);

export default function BoothDetail() {
  const [booth, setBooth] = useState({
    title: '명진관 호떡',
    introduction: '맛있는 호떡과 다양한 음식',
    type: '주점',
    location: '명진관',
    // location_img: BoothDetailMap,
    notice: '호떡이 참 맛있는 맛집',
    day: [29, 30],
    content:
      '맛있는 호떡 먹고 가세요~ 맛있는 호떡 먹고 가세요 피자, 슈크림, 등 다양한 맛을 판매 중입니다.~',
    images: [
      {
        url: NoticeExImg,
      },
      {
        url: NoticeExImg,
      },
      {
        url: NoticeExImg,
      },
    ],
  });

  const [menu, setMenu] = useState([
    {
      name: '호떡',
      price: '2000',
    },
    {
      name: '붕어빵',
      price: '2000',
    },
    {
      name: '불닭볶음면',
      price: '1000',
    },
  ]);

  const SlideView = booth.images.map((b, idx) => {
    return (
      <SwiperSlide key={idx}>
        <img src={b.url} style={{ width: '325px', borderRadius: '2px' }} />
      </SwiperSlide>
    );
  });

  return (
    <div style={{ marginBottom: '76px' }}>
      <UpTitle title={`${booth.type} 홈페이지`} mapleLeft="57px" />

      {/* 스와이퍼 */}
      <SwiperContainer>
        <Swiper
          className="banner"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4200 }}
          style={{ height: 360 }}
        >
          {SlideView}
        </Swiper>
      </SwiperContainer>

      {/* 부스 내용 */}
      <ContentContainer>
        <TypeBtn tp={booth.type}>주점</TypeBtn>
        <BoothTitle>{booth.title}</BoothTitle>
        <BoothIntro>{booth.introduction}</BoothIntro>
        <br />

        <div style={{ display: 'flex', alignItem: 'center' }}>
          <FavoriteBorderIcon style={{ fontSize: '28px' }} />
          &nbsp;
          <LikeCnt>100</LikeCnt>
        </div>
      </ContentContainer>
    </div>
  );
}
