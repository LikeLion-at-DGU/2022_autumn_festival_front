import React from 'react';
import { UpTitle } from '../../styles/style';
import { useParams } from 'react-router-dom';

export default function GuestDelete(password) {
  console.log(password);
  const style = {
    inputbox: {
      borderRadius: '5px',
      background: 'transparent',
      border: '0.5px solid #dadada',
      width: '85px',
      marginLeft: '5px',
      position: 'relative',
    },
  };
  return (
    <div>
      <UpTitle title={`부스 홈페이지`} mapleLeft={'56px'} />
      <div>댓글 삭제하기</div>
      <div>
        {' '}
        비밀번호 확인
        <input
          style={style.inputbox}
          // value={value.password}
          // onChange={onChangePassword}
        />
      </div>
    </div>
  );
}
