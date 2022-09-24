import React from 'react';
import { UpTitle } from '../../styles/style';
import { useParams } from 'react-router-dom';
export default function GuestDelete() {
  let boothId = useParams().boothId;
  console.log(boothId);
  return (
    <div>
      <UpTitle title={`부스 홈페이지`} mapleLeft={'56px'} />
      <div>댓글 삭제하기</div>
      <div> 비밀번호 확인</div>
    </div>
  );
}
