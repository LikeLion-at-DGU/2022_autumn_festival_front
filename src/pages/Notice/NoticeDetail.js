import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  const [notice, setNotice] = useState({
    id: '1',
    notificationType: '주요',
    title: '동국대학교 대동제 책자 비치 및 안내',
    writer: '축제 TF팀',
    createdDateTime: '2022-09-14T14:22:00Z',
    content:
      '안녕하세요! 웹서비스 개발 동아리 🦁멋쟁이사자처럼 10기🦁 입니다. <br/><br/> 저희 멋사는 매년 대동제 사이트를 제작하고 있으며, 대동제를 즐기는 벗들의 편의와 즐거움을 증진시키고 부스를 운영하는 벗들에겐 부스 홍보 효과를 제공해드리고자 노력하고 있습니다. <br/><br/> 저희 동아리는 다양한 전공을 가진 코딩 입문자 벗들이 모인 개발 동아리로, 사이트 구현에 미흡한 점이 있을 수 있습니다🥲 <br/><br/>10기 운영진들과 아기사자들이 여름방학과 연휴를 바쳐 최선을 다해 만들었습니다. 예쁘게 봐주신다면 정말 감사드리겠습니다💕 모두 즐겁고 행복한 기억만 가져가시길 바랍니다. 감사합니다. <br/><br/> -멋사 10기 운영진 일동 드림-',
  });
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

      {/* 카테고리 */}
      <CateContainer>
        <CateBtnActive disabled="true">{notice.notificationType}</CateBtnActive>
      </CateContainer>

      {/* 공지 제목 */}
      <NoticeDetailContainer>
        <NoticeTitle style={{ fontSize: '17px' }}>
          [<b style={{ fontWeight: '800' }}>{notice.notificationType} 공지</b>
          ]&nbsp;&nbsp;{notice.title}
        </NoticeTitle>
      </NoticeDetailContainer>
      <NoticeLine></NoticeLine>

      {/* 공지 상세 */}
      <NoticeDetailContainer>
        <NoticeWriter>{notice.writer}</NoticeWriter>
        <NoticeDate>
          {notice.createdDateTime.slice(0, 10)}&nbsp;&nbsp;
          {notice.createdDateTime.slice(11, 16)}
        </NoticeDate>
      </NoticeDetailContainer>
      <NoticeDetailContent
        dangerouslySetInnerHTML={{ __html: notice.content }}
      ></NoticeDetailContent>
    </div>
  );
}
