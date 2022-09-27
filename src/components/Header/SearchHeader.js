import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages/Booth/Booth.css';
import styled from 'styled-components';
import LogoImg from '../../assets/img/maple.png';

const TitleContainer = styled.section`
  position: relative;
  width: inherit;
  margin-top: 10px; ;
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

const Input = styled.input`
  background-color: rgba(255, 255, 255);
  border-radius: 20px;
  padding: 2% 22%;
  box-shadow: 1px 1px 10px 0px rgb(255, 255, 255);
  border: none;
  margin-bottom: 2rem;
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
      <Input
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder="부스,메뉴 또는 건물 검색"
      />
    </TitleContainer>
  );
}
