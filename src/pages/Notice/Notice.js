import React, { useState } from 'react';
import usePagination from '../../hooks/usePagination';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { TitleStyle } from '../../styles/style';
import {
  CateBtnActive,
  CateBtn,
  NoticeCard,
  NoticeBox,
  NoticeTitle,
  NoticeWriter,
  NoticeDate,
  NoticeLine,
  PageNum,
} from './style';
import DefaultImage from '../../assets/img/noticeDefaultImg.png';

export default function Notice() {
  const category = ['전체', '주요', '축제', '이벤트', '기타'];
  const [option, setOption] = useState('전체');
  const [notices, setNotices] = useState([
    {
      id: '1',
      category: '주요',
      title: '동국대학교 대동제 책자 비치 및 안내',
      writer: '축제 TF팀',
      date: '2022-09-14T14:22:00Z',
      content: '동국대학교 대동제 책자 비치 및 안내',
    },
    {
      id: '2',
      category: '축제',
      title: '동국대학교 대동제 책자 비치 및 안내',
      writer: '축제 TF팀',
      date: '2022-09-14T14:22:00Z',
      content: '동국대학교 대동제 책자 비치 및 안내',
    },
    {
      id: '3',
      category: '이벤트',
      title: '동국대학교 대동제 책자 비치 및 안내',
      writer: '축제 TF팀',
      date: '2022-09-14T14:22:00Z',
      content: '동국대학교 대동제 책자 비치 및 안내',
    },
    {
      id: '4',
      category: '기타',
      title: '동국대학교 대동제 책자 비치 및 안내',
      writer: '축제 TF팀',
      date: '2022-09-14T14:22:00Z',
      content: '동국대학교 대동제 책자 비치 및 안내',
    },
    {
      id: '5',
      category: '기타',
      title: '동국대학교 대동제 책자 비치 및 안내',
      writer: '축제 TF팀',
      date: '2022-09-14T14:22:00Z',
      content: '동국대학교 대동제 책자 비치 및 안내',
    },
    {
      id: '6',
      category: '기타',
      title: '동국대학교 대동제 책자 비치 및 안내',
      writer: '축제 TF팀',
      date: '2022-09-14T14:22:00Z',
      content: '동국대학교 대동제 책자 비치 및 안내',
    },
    {
      id: '7',
      category: '기타',
      title: '동국대학교 대동제 책자 비치 및 안내',
      writer: '축제 TF팀',
      date: '2022-09-14T14:22:00Z',
      content: '동국대학교 대동제 책자 비치 및 안내',
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
    return option === '전체' ? no : no.category.includes(option);
  });

  const pageInfo = usePagination(noticeArray, 6);
  const pageNum = Array.from({ length: pageInfo.maxPage }, (v, i) => i + 1);

  const paginations = pageNum.map((n, idx) => {
    return (
      <PageNum
        key={idx}
        onClick={() => {
          pageInfo.jump(n);
        }}
      >
        {n}
      </PageNum>
    );
  });

  const noticeCard = pageInfo.currentData().map((item, idx) => {
    return (
      <NoticeCard key={idx}>
        <NoticeBox
          onClick={() => {
            window.location.href = `/notice/${item.id}`;
          }}
        >
          <img
            src={DefaultImage}
            style={{ width: '55px', borderRadius: '4px' }}
          />
          <div style={{ marginLeft: '10px' }}>
            <NoticeTitle>
              [<b style={{ fontWeight: '700' }}>{item.category} 공지</b>
              ]&nbsp;&nbsp;{item.title}
            </NoticeTitle>
            <NoticeWriter>{item.writer}</NoticeWriter>
            <NoticeDate>
              {item.date.slice(0, 10)}&nbsp;&nbsp;{item.date.slice(11, 16)}
            </NoticeDate>
          </div>
        </NoticeBox>
        <NoticeLine></NoticeLine>
      </NoticeCard>
    );
  });

  return (
    <>
      <TitleStyle>공지사항</TitleStyle>

      {/* 카테고리 */}
      <div style={{ marginTop: '38px' }}>{categories}</div>

      {/* 공지사항 리스트 */}
      <NoticeLine></NoticeLine>
      {noticeCard}

      {/* 페이지네이션 */}
      <ArrowBackIosIcon
        style={{ cursor: 'pointer' }}
        onClick={() => {
          pageInfo.prev();
        }}
      />
      {paginations}
      <ArrowForwardIosIcon
        style={{ cursor: 'pointer' }}
        onClick={() => {
          pageInfo.next();
        }}
      />
    </>
  );
}
