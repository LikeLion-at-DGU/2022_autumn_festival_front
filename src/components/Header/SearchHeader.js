import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages/Booth/Booth.css';
import styled from 'styled-components';
import LogoImg from '../../assets/img/maple.png';

const TitleContainer = styled.section`
  position: relative;
  width: inherit;
  margin-top: 100px; ;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 28px;
  line-height: 32.2px;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 0.2px rgba(0, 0, 0, 0.25);
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  bottom: 90px;
  left: 117px;
`;

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
      {/* <img src={maple} style={{ width: '2rem' }} /> */}

      <h1 className="booth_page_title"></h1>
      {/* 검색창 */}

      <TitleContainer>
        <Img src={LogoImg} />
        <Title>
          <a
            href="/booth"
            style={{
              textDecorationLine: 'none',
              color: 'white',
            }}
          >
            부스
          </a>
        </Title>
        <input
          value={searchValue}
          onChange={handleChange}
          className="nav__input"
          type="text"
          placeholder="부스이름 또는 메뉴 검색"
        />
      </TitleContainer>
    </div>
  );
}
