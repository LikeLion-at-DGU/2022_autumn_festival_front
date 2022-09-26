import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';

import { UpTitle } from '../../styles/style';
import {
  CateContainer,
  CateBtnActive,
  NoticeLine,
  NoticeDetailContainer,
  NoticeTitle,
  NoticeWriter,
  NoticeDate,
  NoticeDetailContent,
} from './style';
import DefaultImage from '../../assets/img/noticeDefaultImg.png';

import axios from '../../api/axios';

export default function NoticeDetail() {
  const [notice, setNotice] = useState({
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
  });
  const [isLoading, setIsLoading] = useState(false);
  let noticeId = useParams().id;

  // id로 notice 정보 받으면 실행
  useEffect(() => {
    axios
      .get(`notifications/${noticeId}`)
      .then((res) => {
        setNotice(res.data);
        console.log(res.data);
        setIsLoading(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const ImageView =
    Array.isArray(notice.images) && notice.images.length > 0
      ? notice.images.map((item, idx) => {
          // console.log(item);
          return (
            <img
              key={idx}
              src={item.storedFilePath}
              style={{ width: '330px' }}
            />
          );
        })
      : () => {};

  return (
    <div style={{ marginBottom: '76px' }}>
      <UpTitle title="공지사항" />

      {isLoading ? (
        <>
          {/* 카테고리 */}
          <CateContainer>
            <CateBtnActive>{notice.notificationType}</CateBtnActive>
          </CateContainer>

          {/* 공지 제목 */}
          <NoticeDetailContainer>
            <NoticeTitle style={{ fontSize: '17px' }}>
              [
              <b style={{ fontWeight: '800' }}>
                {notice.notificationType} 공지
              </b>
              ]&nbsp;&nbsp;{notice.title}
            </NoticeTitle>
          </NoticeDetailContainer>
          <NoticeLine></NoticeLine>

          {/* 공지 상세 */}
          <NoticeDetailContainer>
            <NoticeWriter>{notice.writer}</NoticeWriter>
            <NoticeDate>
              {String(notice.createdDateTime).slice(0, 10)}&nbsp;&nbsp;
              {String(notice.createdDateTime).slice(11, 16)}
            </NoticeDate>
          </NoticeDetailContainer>
          <NoticeDetailContent
            dangerouslySetInnerHTML={{ __html: notice.content }}
          ></NoticeDetailContent>
          <br />
          <br />
          <NoticeDetailContainer>
            {Array.isArray(notice.images) && notice.images.length > 0 ? (
              ImageView
            ) : (
              <img src={DefaultImage} style={{ width: '330px' }} />
            )}
          </NoticeDetailContainer>
        </>
      ) : (
        <Fade in="true" unmountOnExit style={{ margin: '100px auto' }}>
          <CircularProgress />
        </Fade>
      )}
    </div>
  );
}
