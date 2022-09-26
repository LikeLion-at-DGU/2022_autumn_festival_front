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

export default function BoothDetail() {
  const navigate = useNavigate();
  // 더미 데이터 (추후 수정)
  const [booth, setBooth] = useState({});
  const [menu, setMenu] = useState([]);
  const [isExist, setIsExist] = useState(true);
  let detailId = useParams().id;

  // toggle //
  const [intro, setIntro] = useState(false);
  const [noticeToggle, setNoticeToggle] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 슬라이드 뷰 //
  // console.log(booth.images);
  const SlideView =
    Array.isArray(booth.images) && booth.images.length > 0
      ? booth.images.map((b, idx) => {
          console.log('이미지 : ' + b.storedFilePath);
          return (
            <SwiperSlide key={idx}>
              <img
                src={process.env.REACT_APP_SERVER_PORT + `${b.storedFilePath}`}
                style={{ width: '325px', borderRadius: '2px' }}
              />
            </SwiperSlide>
          );
        })
      : () => {};

  // 좋아요 up, down //
  const UpLike = async () => {
    await axios
      .post(`booths/${detailId}/likes`)
      .then((res) => {
        setBooth({
          ...booth,
          isLike: true,
          likeCnt: booth.likeCnt + 1,
        });
      })
      .catch((e) => {
        console.log('좋아요 실패');
      });
  };

  const DownLike = () => {
    axios.delete(`booths/${detailId}/likes`, {
      withCredentials: true,
    });
    setBooth({
      ...booth,
      isLike: false,
      likeCnt: booth.likeCnt - 1,
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
  const [comments, setComments] = useState([]);

  // 아이디 시작점 설정해야함
  const nextId = useRef();

  const params = useParams();
  const getComments = () => {
    const id = params.id;
    console.log(id);
    axios
      .get(`booths/${id}/comments`)
      .then((response) => {
        // console.log(response.data);
        setComments(response.data);
      })
      .catch((error) => console.log('Network Error : ', error));
  };

  useEffect(() => {
    getComments();
    fetchMenu();
    fetchBoothDetail();
    // setLike();
  }, []);

  const guestArray = comments.filter((no) => {
    return no;
  });

  const pageInfo = usePagination(guestArray, 12);
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
                  {Array.isArray(booth.images) && booth.images.length > 0 ? (
                    SlideView
                  ) : (
                    <SwiperSlide>
                      <img
                        src={NoticeExImg}
                        style={{ width: '325px', borderRadius: '2px' }}
                      />
                    </SwiperSlide>
                  )}
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
                  {console.log(booth.isLike, booth.likeCnt, booth)}
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
