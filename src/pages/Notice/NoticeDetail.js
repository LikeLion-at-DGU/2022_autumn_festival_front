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

import axios from '../../api/axios';

export default function NoticeDetail() {
  const [notice, setNotice] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let noticeId = useParams().id;

  // id로 notice 정보 받으면 실행
  useEffect(() => {
    axios
      .get(`notifications/${noticeId}`)
      .then((res) => {
        setNotice(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div style={{ marginBottom: '76px' }}>
      <UpTitle title="공지사항" />

      {isLoading ? (
        <>
          {/* 카테고리 */}
          <CateContainer>
            <CateBtnActive disabled="true">
              {notice.notificationType}
            </CateBtnActive>
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
        </>
      ) : (
        <Fade in="true" unmountOnExit style={{ margin: '100px auto' }}>
          <CircularProgress />
        </Fade>
      )}
    </div>
  );
}
