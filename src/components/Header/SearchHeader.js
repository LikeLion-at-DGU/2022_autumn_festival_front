import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages/Booth/Booth.css';

export default function SearchHeader() {
  const [searchValue, setsearchValue] = useState('');

  const navigate = useNavigate();

  // 검색
  const handleChange = (e) => {
    setsearchValue(e.target.value);
    navigate(`/booth/Search?q=${searchValue}`);
    //부스
  };

  return (
    <div className="booth_page_header">
      <h1 className="booth_page_title">
        <a
          href="/booth"
          style={{
            textDecorationLine: 'none',
            color: 'white',
          }}
        >
          🍁부스
        </a>
      </h1>
      {/* 검색창 */}
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="부스이름 또는 메뉴 검색"
      />
    </div>
  );
}
