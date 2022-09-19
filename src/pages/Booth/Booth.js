import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booth.css';
// import Boothcard from '../../components/Booth/Boothcard';
import Categories from '../../hooks/Categories';

//날짜 데이터 예시

export default function Booth({}) {
  // const category = match.params.category || '수요일';

  const [searchValue, setsearchValue] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setsearchValue(e.target.value);
    navigate(`/booth?q=${e.target.value}`);
    //부스
  };

  return (
    <section className="booth-container">
      <h1 className="booth_page_title">🍁부스</h1>

      {/* 검색창 */}
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="부스이름 또는 메뉴 검색하기"
      />

      {/* 지도 전체 사진(예시 팔정도) */}
      {/* (건물정보를 받아서 이미지, 부스 해당카테고리에 나와야함) */}
      {/* 크게 날짜, 건물카테고리 */}

      <img
        alt="팔정도"
        src="https://velog.velcdn.com/images/seochan99/post/bfed67d9-30c2-4d59-ae59-7fa0d077618b/image.png"
        className="boothMap"
      />
      <Categories />

      {/* <Boothcard title={requests.title} /> */}
    </section>
  );
}
