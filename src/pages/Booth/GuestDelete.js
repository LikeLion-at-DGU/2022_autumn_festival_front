import React from 'react';
import { UpTitle } from '../../styles/style';
import { useState } from 'react';
import axios from '../../api/axios';
import { useParams } from 'react-router-dom';

export default function GuestDelete() {
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

  const [pwd, setPassword] = useState({ pwd: '' });
  const [error, setError] = useState(null);
  console.log(pwd);
  let commentId = useParams().commentId;

  //input에 입력될 때마다 password state값 변경되게 하는 함수
  const onPassword = (e) => {
    setPassword({
      pwd,
      [e.target.name]: e.target.value,
    });
  };

  const ErrorHandle = (e) => {
    if (e === true) {
    }
  };

  return (
    <div>
      <UpTitle title={`부스 홈페이지`} mapleLeft={'56px'} />
      <div>댓글 삭제하기</div>
      <div>
        {' '}
        비밀번호 확인
        <input style={style.inputbox} onChange={onPassword} />
        <button
          onClick={(e) => {
            axios
              .delete(`/comments/${commentId}`, {
                password: { pwd },
              })
              .then((response) => {
                console.log('삭제 요청 성공');
                setError(true);
              })
              .catch((e) => {
                console.log('삭제 요청 실패');
                setError(false);
              });
          }}
        >
          확인
        </button>
      </div>
      <div>zz</div>
    </div>
  );
}
