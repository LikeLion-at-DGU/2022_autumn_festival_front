import React, { useState } from 'react';
import './Booth.css';
import '../../api/boothData.json';
import styled from 'styled-components';

const LocationImg = styled.img`
  margin: 30px 0px;
  width: 80%;
  box-shadow: 1px 2px 30px 1px rgb(99, 164, 237);
  border: none;
`;

const BoothContainer = styled.section`
  width: 100%;
  text-align: center;
  padding: 2rem 0rem 9rem 0;
`;

export default function Booth({}) {
  return (
    <BoothContainer>
      <LocationImg
        alt="팔정도"
        src="https://velog.velcdn.com/images/seochan99/post/bfed67d9-30c2-4d59-ae59-7fa0d077618b/image.png"
      />
    </BoothContainer>
  );
}
