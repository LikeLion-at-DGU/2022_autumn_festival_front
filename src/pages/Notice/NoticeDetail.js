import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function NoticeDetail() {
  const [notice, setNotice] = useState({
    id: '1',
    category: '주요',
    title: '동국대학교 대동제 책자 비치 및 안내',
    writer: '축제 TF팀',
    date: '2022-09-14T14:22:00Z',
    content: '동국대학교 대동제 책자 비치 및 안내',
  });

  // id로 notice 정보 받으면 실행
  // useEffect(() => {
  //   setNotice()
  // }, []);

  console.log(useParams().id);
  return (
    <>
      <div>NoticeDetail</div>
    </>
  );
}
