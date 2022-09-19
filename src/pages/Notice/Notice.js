import React, { useState } from 'react';
import { TitleStyle } from '../../styles/style';
import {
  NoticeCard,
  NoticeBox,
  NoticeTitle,
  NoticeWriter,
  NoticeDate,
  NoticeLine,
} from './style';

export default function Notice() {
  const [notice, setNotice] = useState([
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
  ]);

  const noticeArray = notice.map((item, idx) => {
    return (
      <NoticeCard key={idx}>
        <NoticeBox>
          <img
            src="https://via.placeholder.com/55x55"
            style={{ width: '55px' }}
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
      <NoticeLine></NoticeLine>
      {noticeArray}
    </>
  );
}
