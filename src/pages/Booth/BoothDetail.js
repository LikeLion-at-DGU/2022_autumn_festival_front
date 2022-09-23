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
  BoothNotificationOpen,
  IntroContainer,
  IntroLine,
  IntroContent,
  MenuContainer,
  MenuItem,
} from './style';
import NoticeExImg from '../../assets/img/noticeExImg.png';
import MapIconImg from '../../assets/img/mainMapIcon.png';
import BoothdetailC from '../../assets/img/boothdetailC.png';
import { UpTitle } from '../../styles/style';

// External Libraries //
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
      '맛있는 호떡 먹고 가세요~맛있는 호떡 먹고 가세요 피자, 슈크림, 등 다양한 맛을 판매중 입니다.~<br/>코로나 19를 딛고 다시 힘차게 오픈하게 된 저희 불닭볶음밥 전문점, 원조 「교테전 불닭볶음밥 식당」을 찾아주신 고객님들 환영합니다 *^^*<br/><br/>기본적으로 치즈가 듬뿍 올라가게 되어 맵지가 않으니 매운 음식을 마다하시는 분들도 맛나게 드실 수 있습니다.<br/>특히, 요 근래 유행하는 콘치즈를 얹어 먹으면 아이들에게도 인기만점! 한끼 식사거리가 될 수 있답니다.<br/><br/>여러분들께서도 공강시간에 배고프실 때, 든든히 먹을 수 있는 밥을 한끼 찾고 계시다면 우리 원조 「교테전 불닭볶음밥 식당」을 찾아주시기 바랍니다.',
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

  // toggle //
  const [intro, setIntro] = useState(false);
  const [noticeToggle, setNoticeToggle] = useState(false);

  // 슬라이드 뷰 //
  const SlideView = booth.images.map((b, idx) => {
    return (
      <SwiperSlide key={idx}>
        <img src={b.url} style={{ width: '325px', borderRadius: '2px' }} />
      </SwiperSlide>
    );
  });

  // 주점 소개 뷰 //
  const IntroView = () => {
    return intro ? (
      <IntroContent
        dangerouslySetInnerHTML={{ __html: booth.content }}
      ></IntroContent>
    ) : (
      <>
        <IntroContent
          dangerouslySetInnerHTML={{ __html: booth.content.slice(0, 50) }}
        ></IntroContent>
        <span
          style={{ fontSize: '12px', cursor: 'pointer' }}
          onClick={() => {
            setIntro(true);
          }}
        >
          ... 더보기
        </span>
      </>
    );
  };

  // 메뉴 소개 뷰 //
  const MenuView = menu.map((m, idx) => {
    return (
      <MenuItem key={idx}>
        <div>{m.name}</div>
        <div style={{ fontSize: '12px' }}>{m.price}원</div>
      </MenuItem>
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

        {/* 부스 공지사항 */}
        {noticeToggle ? (
          <BoothNotificationOpen>
            <div>
              <NotificationsIcon
                style={{ fontSize: '16px', margin: '6px 6px 0 14px' }}
              />
              <div>부스 공지사항</div>
              <KeyboardArrowUpIcon style={{ margin: '3px 14px 6px auto' }} />
            </div>
          </BoothNotificationOpen>
        ) : (
          <BoothNotification
            onClick={() => {
              setNoticeToggle(true);
            }}
          >
            <NotificationsIcon
              style={{ fontSize: '16px', margin: '6px 6px 0 14px' }}
            />
            <div>부스 공지사항</div>
            <KeyboardArrowDownIcon style={{ margin: '3px 14px 6px auto' }} />
          </BoothNotification>
        )}

        {/* 부스 주점 소개 */}
        <IntroContainer>
          <div className="introtitle">
            <img src={BoothdetailC} width="36px" />
            <span>주점 소개</span>
          </div>
          <IntroLine></IntroLine>
          {IntroView()}
        </IntroContainer>

        {/* 부스 메뉴 소개 */}
        <IntroContainer>
          <div className="introtitle">
            <img src={BoothdetailC} width="36px" />
            <span>메뉴</span>
          </div>
          <IntroLine></IntroLine>
          <MenuContainer>{MenuView}</MenuContainer>
        </IntroContainer>
      </ContentContainer>
    </div>
  );
}
