import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages/Booth/Booth.css';

export default function SearchHeader() {
  const [searchValue, setsearchValue] = useState('');

  const navigate = useNavigate();

  // 검색
  const handleChange = (e) => {
    setsearchValue(e.target.value);
    navigate(`/boothSearch?q=${searchValue}`);
    //부스
  };

  return (
    <div>
      <h1 className="booth_page_title">🍁부스</h1>

      {/* 검색창 */}
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="부스이름 또는 메뉴 검색하기"
      />
    </div>
  );
}
