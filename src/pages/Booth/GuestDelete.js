import React from 'react';
import { UpTitle } from '../../styles/style';
import { useState } from 'react';
import axios from '../../api/axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function GuestDelete() {
  const style = {
    boldfont: {
      fontFamily: 'GmarketSansMedium',
      paddingTop: '40px',
    },
    font: {
      fontFamily: 'GmarketSansLight',
    },
    padding: {
      paddingTop: '20px',
      paddingBottom: '250px',
    },
    inputbox: {
      borderRadius: '5px',
      background: 'white',
      border: '0.5px solid #dadada',
      width: '85px',
      marginLeft: '5px',
      position: 'relative',
    },
    default: {
      fontSize: '10px',
      marginRight: '70px',
      fontFamily: 'GmarketSansLight',
    },
    success: {
      fontSize: '16px',
      color: 'lightgreen',
      fontFamily: 'GmarketSansLight',
    },
    not__success: {
      fontSize: '10px',
      color: 'red',
      marginRight: '50px',
      fontFamily: 'GmarketSansLight',
    },
    previous: {
      borderRadius: '10px',
      border: 'none',
      backgroundColor: '#FD9903',
      color: 'white',
      fontFamily: 'GmarketSansMedium',
      padding: '5px',
      width: '70px',

      marginTop: '10px',
    },
  };

  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  let commentId = useParams().commentId;
  let boothId = useParams().boothId;

  const navigate = useNavigate();
  const onClickremove = () => {
    navigate(`/booth/${boothId}`);
  };

  //input에 입력될 때마다 password state값 변경되게 하는 함수

  const deleteComments = async (e) => {
    setPassword(e.target.value);
    console.log('된거임');

    await axios
      // `/booth/${detailId}/comment/${id}`
      .delete(`/comments/${commentId}`, {
        data: { password: password },
      })
      .then((response) => {
        console.log(response.status);
        setError(true);
      })
      .catch((e) => {
        console.log('에러임', e);
        setError(false);
      });
  };

  return error === null ? (
    <div>
      <UpTitle title={`부스 홈페이지`} mapleLeft={'56px'} />
      <div style={style.boldfont}>댓글 삭제하기</div>
      <div style={style.padding}>
        <div style={style.default}>비밀번호를 입력해주세요.</div>
        <span style={style.font}>비밀번호 확인</span>
        <input
          style={style.inputbox}
          onKeyPress={(e) => {
            deleteComments(e);
          }}
        />
      </div>
    </div>
  ) : error === true ? ( //true로 바꿔야함
    <div>
      <UpTitle title={`부스 홈페이지`} mapleLeft={'56px'} />
      <div style={style.boldfont}>댓글 삭제하기</div>
      <div style={style.padding}>
        <div style={style.success}>비밀번호가 확인되었습니다.</div>
        <br></br>
        <button
          style={style.previous}
          onClick={(e) => {
            onClickremove();
          }}
        >
          확인
        </button>
      </div>
    </div>
  ) : (
    <div>
      <UpTitle title={`부스 홈페이지`} mapleLeft={'56px'} />
      <div style={style.boldfont}>댓글 삭제하기</div>
      <div style={style.padding}>
        <div style={style.not__success}>비밀번호가 일치하지 않습니다.</div>
        <div>
          <span style={style.font}>비밀번호 확인</span>

          <input
            style={style.inputbox}
            onKeyPress={(e) => {
              deleteComments(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}
