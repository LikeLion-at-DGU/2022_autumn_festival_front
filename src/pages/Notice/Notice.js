import React, { useState, useEffect } from 'react';
import usePagination from '../../hooks/usePagination';
import { useLocation } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import '../Booth/Booth.css';

import { UpTitle } from '../../styles/style';
import {
  CateContainer,
  CateBtnActive,
  CateBtn,
  NoticeCard,
  NoticeTitle,
  NoticeWriter,
  NoticeDate,
  NoticeLine,
  PageNum,
  Pagination,
} from './style';
import DefaultImage from '../../assets/img/noticeDefaultImg.png';

import axios from '../../api/axios';

export default function Notice() {
  const category = ['전체', '주요', '축제', '이벤트', '기타'];
  const [option, setOption] = useState('전체');
  const [isLoading, setIsLoading] = useState(false);
  const [notices, setNotices] = useState([
    {
      id: '1',
      notificationType: '주요',
      title: '동국대학교 대동제 책자 비치 및 안내',
      writer: '축제 TF팀',
      createdDateTime: '2022-09-14T14:22:00Z',
      content: '동국대학교 대동제 책자 비치 및 안내',
      images: [
        {
          id: 1,
          originFileName: '',
          serverFileName: '',
          storedFilePath: '',
        },
      ],
    },
  ]);

  function onCategoryClick(e) {
    setOption(e.target.value);
  }

  const categories = category.map((cate, idx) => {
    return option === cate ? (
      <CateBtnActive key={idx} value={cate} onClick={onCategoryClick}>
        {cate}
      </CateBtnActive>
    ) : (
      <CateBtn key={idx} value={cate} onClick={onCategoryClick}>
        {cate}
      </CateBtn>
    );
  });

  const noticeArray = notices.filter((no) => {
    return option === '전체' ? no : no.notificationType.includes(option);
  });

  const pageInfo = usePagination(noticeArray, 6);
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

  const noticeCard = pageInfo.currentData().map((item, idx) => {
    // console.log(item.images);
    return (
      <NoticeCard key={idx} className="fadeInNotice">
        <div
          onClick={() => {
            window.location.href = `/notice/${item.id}`;
          }}
        >
          <img
            src={
              Array.isArray(item.images) && item.images.length > 0
                ? item.images[0].storedFilePath
                : DefaultImage
            }
            style={{ width: '55px', borderRadius: '4px' }}
          />
          <div style={{ marginLeft: '10px' }}>
            <NoticeTitle>
              [<b style={{ fontWeight: '800' }}>{item.notificationType} 공지</b>
              ]&nbsp;&nbsp;{item.title}
            </NoticeTitle>
            <NoticeWriter>{item.writer}</NoticeWriter>
            <NoticeDate>
              {item.createdDateTime.slice(0, 10)}&nbsp;&nbsp;
              {item.createdDateTime.slice(11, 16)}
            </NoticeDate>
          </div>
        </div>
        <NoticeLine></NoticeLine>
      </NoticeCard>
    );
  });

  const fetchNotice = async () => {
    await axios
      .get(`notifications`)
      .then((res) => {
        // console.log(res.data);
        setNotices(res.data);
        setIsLoading(true);
      })
      .catch((e) => {
        //console.log(e);
      });
  };

  useEffect(() => {
    pageInfo.jump(1);
  }, [option]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // get 공지사항 리스트 api //
  useEffect(() => {
    fetchNotice();
  }, []);

  return (
    <>
      <UpTitle title="공지사항" />

      {/* 카테고리 */}
      <CateContainer>{categories}</CateContainer>

      {/* 공지사항 리스트 */}
      <NoticeLine></NoticeLine>
      {isLoading ? (
        <>
          {noticeCard}

          {/* 페이지네이션 */}
          <Pagination>
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
          </Pagination>
        </>
      ) : (
        <Fade in="true" unmountOnExit style={{ margin: '100px auto' }}>
          <CircularProgress />
        </Fade>
      )}
    </>
  );
}
