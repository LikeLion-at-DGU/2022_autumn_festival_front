import React, { useEffect, useState, useRef, useCallback } from 'react';
import usePagination from '../../hooks/usePagination';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CommentInput from '../../components/Booth/CommentInput';
import styled from 'styled-components';
import BoothMenuAdd from '../../components/Booth/BoothMenuAdd';
import axios from '../../api/axios';
import {
  SwiperContainer,
  ContentContainer,
  TypeBtn,
  BoothTitle,
  BoothIntro,
  LikeCount,
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
  Paginations,
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
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import GuestBookItem from '../../components/Booth/GuestBookItem';
import { PageNum } from '../Notice/style';

SwiperCore.use([Pagination, Autoplay]);

const style = {
  badwordstyle: {
    fontFamily: 'GmarketSansLight',
    fontSize: '12px',
    color: '#F54D28',
    textAlign: 'left',
    marginLeft: '20px',
  },
};

export default function BoothDetail() {
  const navigate = useNavigate();
  // 더미 데이터 (추후 수정)
  const [booth, setBooth] = useState({
    title: '명진관 호떡',
    introduction: '맛있는 호떡과 다양한 음식',
    boothType: '주점',
    location: '명진관 9번',
    notice:
      '16일 우천시에도 운영합니다! <br/>*교공 하트키링 판매중(3000원, 한정수량)<br/><br/>[운영 시간] 10:00 - 16:00 (품절시 마감 공지)<br/>[운영 위치] 교육관 7번 부스<br/><br/>*교육관 생각보다 안멀어요!! (포관쪽에서 5분 소요) 드셔보세요ヾ(•ω•`)o*<br/><br/>**주인장의 꿀팁: 콘치즈랑 팝콘치킨을 모두 추가한 게 제일 맛있습니다(메인 메뉴임)**',
    days: [28, 29, 30],
    content:
      '맛있는 호떡 먹고 가세요~맛있는 호떡 먹고 가세요 피자, 슈크림, 등 다양한 맛을 판매중 입니다.~<br/>코로나 19를 딛고 다시 힘차게 오픈하게 된 저희 불닭볶음밥 전문점, 원조 「교테전 불닭볶음밥 식당」을 찾아주신 고객님들 환영합니다 *^^*<br/><br/>기본적으로 치즈가 듬뿍 올라가게 되어 맵지가 않으니 매운 음식을 마다하시는 분들도 맛나게 드실 수 있습니다.<br/>특히, 요 근래 유행하는 콘치즈를 얹어 먹으면 아이들에게도 인기만점! 한끼 식사거리가 될 수 있답니다.<br/><br/>여러분들께서도 공강시간에 배고프실 때, 든든히 먹을 수 있는 밥을 한끼 찾고 계시다면 우리 원조 「교테전 불닭볶음밥 식당」을 찾아주시기 바랍니다.',
    images: [
      {
        id: 1,
        originFileName: 'dd',
        serverFileName: 'dd',
        storedFilePath: 'dd',
      },
    ],
    isLike: false,
    likeCnt: 0,
  });
  const [menu, setMenu] = useState([
    {
      id: '1',
      name: '호떡',
      price: '2000',
    },
  ]);
  const [isExist, setIsExist] = useState(true);
  let detailId = useParams().id;

  // toggle //
  const [intro, setIntro] = useState(false);
  const [noticeToggle, setNoticeToggle] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 슬라이드 뷰 //
  console.log('외부', booth.images);

  const SlideView = booth.images
    ? booth.images.map((b, idx) => {
        console.log('이미지 : ' + b.storedFilePath);
        return (
          <SwiperSlide key={idx}>
            <img
              src={`http://192.168.0.194:8080${b.storedFilePath}`}
              style={{ width: '325px', borderRadius: '2px' }}
            />
          </SwiperSlide>
        );
      })
    : () => {
        return (
          <SwiperSlide>
            <img
              src={NoticeExImg}
              style={{ width: '325px', borderRadius: '2px' }}
            />
          </SwiperSlide>
        );
      };

  // 좋아요 up, down //
  const UpLike = async () => {
    await axios
      .post(`booths/${detailId}/likes`)
      .then((res) => {
        setBooth({
          ...booth,
          isLike: false,
          likeCnt: booth.likeCnt - 1,
        });
      })
      .catch((e) => {
        console.log('좋아요 실패');
      });
  };

  const DownLike = async () => {
    await axios.delete(`booths/${detailId}/likes`).then((res) => {
      setBooth({
        ...booth,
        isLike: true,
        likeCnt: booth.likeCnt + 1,
      });
    });
  };

  // 좋아요 기능 //
  const HeartView = (tp) => {
    return booth.isLike ? (
      <FavoriteIcon
        onClick={() => {
          DownLike();
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
          UpLike();
        }}
        style={{ fontSize: '28px' }}
      />
    );
  };

  const fetchBoothDetail = async () => {
    await axios
      .get(`booths/${detailId}`)
      .then((res) => {
        setBooth(res.data);
        console.log(res.data);
        setIsLoading(true);
        // if (res.data.images === null) {
        //   setBooth({ ...booth, images: [] });
        // }
      })
      .catch((e) => {
        setIsExist(false);
        console.log(e);
      });
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
  const fetchMenu = async () => {
    await axios
      .get(`booths/${detailId}/menus`)
      .then((res) => {
        setMenu(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
    // {
    //   id: 1,
    //   writer: '김멋사',
    //   content: '내용입니다',
    //   createdDateTime: '2022-09-23',
    // },
    // {
    //   id: 2,
    //   writer: '최멋사',
    //   content: '내용2입니다',
    //   createdDateTime: '2022-09-23',
    // },
  ]);

  // 아이디 시작점 설정해야함
  const nextId = useRef();

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

  useEffect(() => {
    getComments();
    fetchMenu();
  }, []);

  const guestArray = comments.filter((no) => {
    return no;
  });

  const pageInfo = usePagination(guestArray, 10);
  const pageNum = Array.from({ length: pageInfo.maxPage }, (v, i) => i + 1);

  const paginations = pageNum.map((n, idx) => {
    return (
      <PageNum
        key={idx}
        active={pageInfo.currentPage === n ? 'y' : ''}
        onClick={() => {
          pageInfo.jump(n);
        }}
      >
        {n}
      </PageNum>
    );
  });
  useEffect(() => {
    fetchBoothDetail();
  }, [booth.isLike, booth.likeCnt]);

  return (
    <>
      {isExist ? (
        <div style={{ marginBottom: '76px' }}>
          <UpTitle
            title={`${booth.boothType} 홈페이지`}
            mapleLeft={
              booth.boothType === '푸드트럭' || booth.boothType === '플리마켓'
                ? '30px'
                : '57px'
            }
          />

          {isLoading ? (
            <>
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
                <TypeBtn tp={booth.boothType}>{booth.boothType}</TypeBtn>
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
                  {HeartView(booth.boothType)}
                  &nbsp;
                  <LikeCount>{booth.likeCnt}</LikeCount>
                </div>

                <DateLocContainer>
                  <div>
                    {booth.days.map((d) => {
                      return <span key={d}>{d}일 &nbsp;</span>;
                    })}
                  </div>
                  &nbsp;
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
                      <KeyboardArrowUpIcon
                        style={{ margin: '3px 14px 6px auto' }}
                      />
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
                    <KeyboardArrowDownIcon
                      style={{ margin: '3px 14px 6px auto' }}
                    />
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
                  <CommentInput />
                  <div style={style.badwordstyle}>
                    욕설, 성희롱, 비방 발언을 작성할 경우 ip주소를 통해{' '}
                    <div></div>법적 조치할 예정입니다.
                  </div>
                  {pageInfo.currentData(comments).map((comment) => {
                    {
                      // console.log(comment);
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
                    }
                  })}

                  <Paginations>
                    <ArrowBackIosIcon
                      style={{
                        cursor: 'pointer',
                        fontSize: '15px',
                        color: 'rgba(255, 255, 255, 0.35)',
                        paddingLeft: '5px',
                      }}
                      onClick={() => {
                        pageInfo.prev();
                      }}
                    />
                    {paginations}
                    <ArrowForwardIosIcon
                      style={{
                        cursor: 'pointer',
                        fontSize: '15px',
                        color: 'rgba(255, 255, 255, 0.35)',
                      }}
                      onClick={() => {
                        pageInfo.next();
                      }}
                    />
                  </Paginations>
                </IntroContainer>
              </ContentContainer>
            </>
          ) : (
            <Fade in="true" unmountOnExit style={{ margin: '100px auto' }}>
              <CircularProgress />
            </Fade>
          )}
        </div>
      ) : (
        <>
          <Stack sx={{ width: '328px', margin: '200px auto' }} spacing={2}>
            <Alert variant="outlined" severity="warning" sx={{ color: '#fff' }}>
              해당하는 게시글이 없습니다.
            </Alert>
          </Stack>
        </>
      )}
    </>
  );
}
