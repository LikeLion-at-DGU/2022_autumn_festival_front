import React from 'react';
import styled from 'styled-components';
import LogoImg from './maple.png';
import Table from './Table';

const TitleContainer = styled.section`
  position: relative;
  width: inherit;
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
  bottom: 10px;
  left: 75px;
`;

export default function TimeTable() {
  return (
    <>
      <TitleContainer>
        <Img src={LogoImg} />
        <Title>타임테이블</Title>
      </TitleContainer>
      <Table />
    </>
  );
}
