import React, { useEffect, useState, useRef, useCallback } from 'react';
import usePagination from '../../hooks/usePagination';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BoothMenuAdd from '../../components/Booth/BoothMenuAdd';

import boothDefaultImg from '../../assets/img/부스_default.png';
import JoojumDefaultImg from '../../assets/img/주점_default.png';
import FoodDefaultImg from '../../assets/img/푸드트럭_default.png';
import FleaDefaultImg from '../../assets/img/플리마켓_default.png';

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

// CommentInput
import { useForm } from 'react-hook-form';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { badwordexam } from '../../components/Booth/BadWord';

SwiperCore.use([Pagination, Autoplay]);

const style = {
  badwordstyle: {
    fontFamily: 'GmarketSansLight',
    fontSize: '12px',
    color: '#F54D28',
    textAlign: 'left',
    marginLeft: '20px',
    marginTop: '5px',
    marginBottom: '15px',
  },
};

export default function BoothDetail() {
  const navigate = useNavigate();
  // 더미 데이터 (추후 수정)
  const [booth, setBooth] = useState([
    {
      id: 1,
      boothType: 'ㅇ',
      title: '명진관호떡',
      location: '원흥관',
      introduction: '맛있는 호떡과 다양한 음식',
      likeCnt: 20,
      images: [
        {
          id: 1,
          originFileName: '멋사.jpg',
          serverFileName: '6fb151081add763ec08da678a9578eff',
          storedFilePath: 'https://han.gl/pYMEv',
        },
        {
          id: 2,
          originFileName: '멋사.jpg',
          serverFileName: '6fb151081add763ec08da678a9578eff',
          storedFilePath: 'static//6fb151081add763ec08da678a9578eff.jpg',
        },
      ],
    },
  ]);
  const [menu, setMenu] = useState([
    {
      id: 0,
      name: '',
      price: 0,
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
  // console.log(booth.images);
  const SlideView =
    Array.isArray(booth.images) && booth.images.length > 0
      ? booth.images.map((b, idx) => {
          // console.log('이미지 : ' + b.storedFilePath);
          return (
            <SwiperSlide key={idx}>
              <img
                src={`${b.storedFilePath}`}
                style={{ width: '325px', borderRadius: '2px' }}
              />
            </SwiperSlide>
          );
        })
      : () => {};

  // 좋아요 up, down //
  const UpLike = async () => {
    // alert('좋아요 기능은 28일 오전 11시부터 활성화됩니다!');
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
            tp === '주점'
              ? '#ff6b6b'
              : tp === '부스'
              ? '#0b9908'
              : tp === '플리마켓'
              ? '#ae66e7'
              : '#2676ee'
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
        {booth.content.length >= 50 ? (
          <span
            style={{ fontSize: '12px', cursor: 'pointer' }}
            onClick={() => {
              setIntro(true);
            }}
          >
            ... 더보기
          </span>
        ) : (
          <></>
        )}
      </>
    );
  };

  // 메뉴 소개 뷰 //
  const fetchMenu = async () => {
    await axios
      .get(`booths/${detailId}/menus`)
      .then((res) => {
        setMenu(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const MenuView = menu.map((m, idx) => {
    return (
      <MenuItem key={idx}>
        <div>{m.name}</div>
        <div style={{ fontSize: '12px', marginLeft: 'auto' }}>
          {m.price == 0 ? '가격없음' : String(m.price) + '원'}
        </div>
        {admin === 'true' ? (
          <a
            href="#"
            onClick={() => {
              axios.delete(`menus/${m.id}`);
              window.location.reload();
            }}
          >
            <CancelIcon style={{ margin: '4px 1px' }} />
          </a>
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
    setAdmin(query.get('likelionf10'));
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
    fetchBoothDetail();
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

  // CommentInput

  const CommentInsert = styled.form`
    height: 90px;
    display: flex;
    flex-direction: column;
  `;

  const WrapComment = styled.div`
    position: relative;
    top: 0;
    left: 0;
    & > input {
      position: absolute;
      left: 10px;
      top: 8px;
      padding: 8px;
    }
  `;

  const Inputstyle = {
    wrap: {
      padding: '10px',
      height: '20px',
    },

    wrap__content: {
      padding: '10px',
      height: '20px',
      //임의
      paddingBottom: '30px',
    },

    font: {
      fontFamily: 'GmarketSansLight',
      fontSize: '12px',
    },

    box__name: {
      position: 'absolute',
      padding: '5px',
      float: 'left',
    },
    box__pw: {
      padding: '5px',
      float: 'right',
    },

    inputbox: {
      borderRadius: '5px',
      background: 'transparent',
      border: '0.5px solid #dadada',
      width: '85px',
      marginLeft: '5px',
      position: 'relative',
      color: '#FFF',
    },
    contentbox: {
      fontFamily: 'GmarketSansLight',
      fontSize: '12px',

      borderRadius: '20px',
      background: 'transparent',
      border: ' 1px solid #dadada',
      boxShadow: '0 0 2px white',
      width: '90%',
      height: '20px',
      paddingLeft: '10px',
      color: '#FFF',
    },
    button: {
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      fontSize: '20px',
      // 임의
    },
  };

  const CommentInput = (/*{ onInsert }*/) => {
    let detailId = useParams().id;
    console.log('detailId:', detailId);

    const { register, handleSubmit, setValue } = useForm();

    const onValid = async (data) => {
      const checkWord = (target, badwordexam) => {
        for (let i = 0; i < badwordexam.length; i++) {
          if (target.includes(badwordexam[i])) {
            return true;
          }
        }
        return false;
      };

      if (checkWord(data.content, badwordexam)) {
        window.alert(
          '욕설, 비속어, 성희롱, 비방 목적의 단어 등의 입력을 금지합니다.',
        );
        setValue('content', '');
        return;
      }

      try {
        await axios.post(`/booths/${detailId}/comments`, {
          writer: data.writer,
          password: data.password,
          content: data.content,
        });
      } catch (e) {
        console.log(e);
      }

      try {
        await axios.get(`booths/${detailId}/comments`).then((response) => {
          setComments(response.data);
        });
      } catch (e) {
        console.log(e);
      }

      setValue('writer', '');
      setValue('password', '');
      setValue('content', '');
    };

    return (
      <CommentInsert
        onSubmit={handleSubmit(onValid)}
        className="CommentInsert"
        method="post"
      >
        <div style={Inputstyle.wrap}>
          <div style={Inputstyle.box__name}>
            <div style={Inputstyle.font}>
              작성자명
              <input
                style={Inputstyle.inputbox}
                {...register('writer', { required: true })}
                placeholder="작성자명"
              />
            </div>
          </div>
          <div style={Inputstyle.box__pw}>
            <div style={Inputstyle.font}>
              비밀번호
              <input
                style={Inputstyle.inputbox}
                {...register('password', { required: true })}
                placeholder="비밀번호"
              />
            </div>
          </div>
        </div>
        <WrapComment>
          <input
            {...register('content', { required: true })}
            style={Inputstyle.contentbox}
            placeholder="후기를 남겨보세요."
          />
          <ArrowCircleDownIcon
            onClick={handleSubmit(onValid)}
            style={{
              position: 'absolute',
              right: '12px',
              top: '12px',
              fontSize: '28px',
            }}
          ></ArrowCircleDownIcon>
        </WrapComment>
      </CommentInsert>
    );
  };

  return (
    <>
      {isExist ? (
        <div style={{ marginBottom: '76px' }}>
          {isLoading ? (
            <>
              <UpTitle
                title={`${booth.boothType} 홈페이지`}
                mapleLeft={
                  booth.boothType === '푸드트럭' ||
                  booth.boothType === '플리마켓'
                    ? '30px'
                    : '57px'
                }
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
                  {Array.isArray(booth.images) && booth.images.length > 0 ? (
                    SlideView
                  ) : (
                    <SwiperSlide>
                      <img
                        src={
                          booth.boothType === '푸드트럭'
                            ? FoodDefaultImg
                            : booth.boothType === '주점'
                            ? JoojumDefaultImg
                            : booth.boothType === '부스'
                            ? boothDefaultImg
                            : FleaDefaultImg
                        }
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
                  <EditBtn
                    onClick={() =>
                      navigate(`/booth/${detailId}/edit?likelionf10=true`)
                    }
                  >
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
                    <span>소개</span>
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
                  <div style={style.badwordstyle}>
                    욕설, 성희롱, 비방 발언을 작성할 경우 ip주소를 통해{' '}
                    <div></div>법적 조치할 예정입니다.
                  </div>
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
