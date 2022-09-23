import React, { useState } from 'react';

import {
  SwiperContainer,
  ContentContainer,
  TypeBtn,
  BoothTitle,
  BoothIntro,
  LikeCnt,
  DateLocContainer,
  LocationMap,
  BoothNotification,
} from './style';
import NoticeExImg from '../../assets/img/noticeExImg.png';
import MapIconImg from '../../assets/img/mainMapIcon.png';
import { UpTitle } from '../../styles/style';

// External Libraries //
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

SwiperCore.use([Pagination, Autoplay]);

export default function BoothDetail() {
  // 더미 데이터 (추후 수정)
  const [booth, setBooth] = useState({
    title: '명진관 호떡',
    introduction: '맛있는 호떡과 다양한 음식',
    boothType: {
      korean: '주점',
    },
    location: '명진관 9번',
    notice: '호떡이 참 맛있는 맛집',
    startAt: '2022-09-23',
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
      <UpTitle title={`${booth.boothType.korean} 홈페이지`} mapleLeft="57px" />

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
        <TypeBtn tp={booth.boothType.korean}>{booth.boothType.korean}</TypeBtn>
        <BoothTitle>{booth.title}</BoothTitle>
        <BoothIntro>{booth.introduction}</BoothIntro>
        <br />

        <div style={{ display: 'flex', alignItem: 'center' }}>
          <FavoriteBorderIcon style={{ fontSize: '28px' }} />
          &nbsp;
          <LikeCnt>100</LikeCnt>
        </div>

        <DateLocContainer>
          <div>{booth.startAt.slice(8, 10)}일</div>&nbsp;
          <LocationMap>
            <img src={MapIconImg} width="24" height="26" />
            {booth.location}
          </LocationMap>
        </DateLocContainer>
        <BoothNotification>
          <NotificationsIcon
            style={{ fontSize: '16px', margin: '6px 6px 0 14px' }}
          />
          <div>부스 공지사항</div>
          <KeyboardArrowDownIcon style={{ margin: '3px 14px 6px auto' }} />
        </BoothNotification>
      </ContentContainer>
    </div>
  );
}
