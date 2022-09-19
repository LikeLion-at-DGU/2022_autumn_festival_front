import React, { useState } from 'react';
import './Booth.css';
import '../../api/boothData.json';
// import Boothcard from '../../components/Booth/Boothcard';
import Categories from '../../hooks/Categories';

export default function Booth({}) {
  // const category = match.params.category || '수요일';
  return (
    <section className="booth-container">
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
