import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booth.css';

export default function Booth() {
  const [searchValue, setsearchValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setsearchValue(e.target.value); //바로 검색가능하다.
    navigate(`/booth?q=${e.target.value}`);
  };

  return (
    <section className="booth-container">
      {/* 검색창 */}
      <h1 className="booth_page_title">🍁부스</h1>
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="부스이름 또는 메뉴 검색하기"
      />

      {/* 지도 전체 사진(예시 팔정도) */}
      <img
        alt="팔정도"
        src="https://velog.velcdn.com/images/seochan99/post/bfed67d9-30c2-4d59-ae59-7fa0d077618b/image.png"
        className="boothMap"
      />
    </section>
  );
}
