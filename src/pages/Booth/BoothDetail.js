import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CommentInput from '../../components/Booth/CommentInput';
import BoothMenuAdd from '../../components/Booth/BoothMenuAdd';
import axios from '../../api/axios';
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
  EditBtn,
} from './style';
import NoticeExImg from '../../assets/img/noticeExImg.png';
import MapIconImg from '../../assets/img/mainMapIcon.png';
import BoothdetailC from '../../assets/img/boothdetailC.png';
import { UpTitle } from '../../styles/style';

// External Libraries //
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CancelIcon from '@mui/icons-material/Cancel';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import GuestBookItem from '../../components/Booth/GuestBookItem';

SwiperCore.use([Pagination, Autoplay]);

export default function BoothDetail() {
  const navigate = useNavigate();
  // 더미 데이터 (추후 수정)
  const [booth, setBooth] = useState({
    title: '명진관 호떡',
    introduction: '맛있는 호떡과 다양한 음식',
    boothType: {
      korean: '주점',
    },
    location: '명진관 9번',
    notice:
      '16일 우천시에도 운영합니다! <br/>*교공 하트키링 판매중(3000원, 한정수량)<br/><br/>[운영 시간] 10:00 - 16:00 (품절시 마감 공지)<br/>[운영 위치] 교육관 7번 부스<br/><br/>*교육관 생각보다 안멀어요!! (포관쪽에서 5분 소요) 드셔보세요ヾ(•ω•`)o*<br/><br/>**주인장의 꿀팁: 콘치즈랑 팝콘치킨을 모두 추가한 게 제일 맛있습니다(메인 메뉴임)**',
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
  const [lovecnt, setLovecnt] = useState(100);
  let detailId = useParams().id;

  // toggle //
  const [intro, setIntro] = useState(false);
  const [noticeToggle, setNoticeToggle] = useState(false);
  const [love, setLove] = useState(false);
  const [admin, setAdmin] = useState(false);

  // 슬라이드 뷰 //
  const SlideView = booth.images.map((b, idx) => {
    return (
      <SwiperSlide key={idx}>
        <img src={b.url} style={{ width: '325px', borderRadius: '2px' }} />
      </SwiperSlide>
    );
  });

  // 좋아요 기능 //
  const HeartView = (tp) => {
    return love ? (
      <FavoriteIcon
        onClick={() => {
          setLove(false);
          setLovecnt(lovecnt - 1);
        }}
        style={{
          fontSize: '28px',
          color: `${
            tp === '주점' ? '#ff6b6b' : tp === '부스' ? '#0b9908' : '#2676ee'
          }`,
        }}
      />
    ) : (
      <FavoriteBorderIcon
        onClick={() => {
          setLove(true);
          setLovecnt(lovecnt + 1);
        }}
        style={{ fontSize: '28px' }}
      />
    );
  };

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
        <div style={{ fontSize: '12px', marginLeft: 'auto' }}>{m.price}원</div>
        {admin === 'true' ? (
          <CancelIcon style={{ margin: '4px 1px' }} />
        ) : (
          <></>
        )}
      </MenuItem>
    );
  });

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  useEffect(() => {
    // console.log(query.get('admin'));
    setAdmin(query.get('admin'));
  }, [query]);

  //방명록
  const [comments, setComments] = useState([
    {
      id: 1,
      writer: '김멋사',
      password: 'pw1',
      content: '내용입니다',
      createdDateTime: '2022-09-23',
    },
    {
      id: 2,
      writer: '최멋사',
      password: 'pw2',
      content: '내용2입니다',
      createdDateTime: '2022-09-23',
    },
  ]);

  // 아이디 시작점 설정해야함
  const nextId = useRef(3);

  const onInsert = useCallback(
    (writer, password, content, createdDateTime) => {
      const comment = {
        id: nextId.current,
        writer,
        password,
        content,
        createdDateTime,
      };
      console.log(writer);
      console.log(content);
      console.log(password);
      setComments((comments) => comments.concat(comment));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [comments],
  );

  const params = useParams();
  const getComments = () => {
    const id = params.id;
    console.log(id);
    axios
      .get(`booths/${id}/comments`)
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      })
      .catch((error) => console.log('Network Error : ', error));
  };
  useEffect(getComments, []);
  return (
    <div style={{ marginBottom: '76px' }}>
      <UpTitle
        title={`${booth.boothType.korean} 홈페이지`}
        mapleLeft={booth.boothType.korean === '푸드트럭' ? '30px' : '57px'}
      />

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
        {admin === 'true' ? (
          <EditBtn onClick={() => navigate(`/booth/${detailId}/edit`)}>
            수정하기
          </EditBtn>
        ) : (
          <></>
        )}
        <br />

        <div style={{ display: 'flex', alignItem: 'center' }}>
          {HeartView(booth.boothType.korean)}
          &nbsp;
          <LikeCnt>{lovecnt}</LikeCnt>
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
          <BoothNotificationOpen
            onClick={() => {
              setNoticeToggle(false);
            }}
          >
            <div className="bar">
              <NotificationsIcon
                style={{ fontSize: '16px', margin: '6px 6px 0 14px' }}
              />
              <div>부스 공지사항</div>
              <KeyboardArrowUpIcon style={{ margin: '3px 14px 6px auto' }} />
            </div>
            <div
              className="notice"
              dangerouslySetInnerHTML={{ __html: booth.notice }}
            ></div>
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
          <BoothMenuAdd admin={admin} menu={menu} setMenu={setMenu} />
          <MenuContainer>{MenuView}</MenuContainer>
        </IntroContainer>

        {/* 방명록 */}
        <IntroContainer>
          <div className="introtitle">
            <img src={BoothdetailC} width="36px" />
            <span>방명록</span>
          </div>
          <IntroLine></IntroLine>
          <CommentInput onInsert={onInsert} />

          {comments.map((comment) => {
            console.log(comment);
            return (
              <GuestBookItem
                detailId={detailId}
                id={comment.id}
                writer={comment.writer}
                password={comment.password}
                content={comment.content}
                createdDateTime={comment.createdDateTime}
              />
            );
          })}
        </IntroContainer>
      </ContentContainer>
    </div>
  );
}
