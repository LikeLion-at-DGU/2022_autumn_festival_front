import * as React from 'react';
import Card from '@mui/material/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Boothcard.css';
import styled from 'styled-components';

import noticeExImg from '../../assets/img/noticeExImg.png';
import { fontWeight } from '@mui/system';

// const boothCard = styled.section`
//   width: 100%;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   border-bottom: 2px solid rgba(255, 255, 255, 0.2);
//   box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);
// `;

const Location_number = styled.p`
  font-size: 1px;
  left: 10rem;
  display: inline;
  float: left;
  margin-left: 10px;
  margin-top: 5px;
  color: #fd9903;
  font-weight: 800;
`;
const BoothLike = styled.div`
  font-size: 1px;
  float: right;
  margin-right: 17px;
`;

const BoothLikeNum = styled.div`
  font-size: 10px;
  left: 10rem;
  position: absolute;
  display: inline;
  float: right;
  left: 130px;
  bottom: 74px;
`;

const WhatBoothBorder = styled.div`
  position: absolute;
  font-size: 7px;
  border: none;
  border-radius: 2px;
  padding: 2px 5px;
  // 부스일때
  background-color: #ff6b6b;

  //
  margin: 5px;
  color: white;
`;

// 부스 #0b9908
// 주점 #FF6B6B
// 받아서 다른 이름일때 디른 색깔
export default function Boothcard({ title }) {
  return (
    <Card sx={{ maxWidth: 145 }} className="cardCss">
      <CardActionArea>
        <WhatBoothBorder>주점</WhatBoothBorder>
        <CardMedia
          component="img"
          height="105"
          image={noticeExImg}
          alt="부스 이미지"
        />
        <Location_number>명진관 11번</Location_number>

        <BoothLike>
          <FavoriteBorderIcon sx={{ width: '10px' }} />
          <BoothLikeNum>8</BoothLikeNum>
        </BoothLike>

        <CardContent
          style={{ marginTop: '10px', fontFamily: 'GmarketSansMedium' }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{
              fontSize: '17px',
              fontFamily: 'GmarketSansMedium',
              fontWeight: '800',
            }}
          >
            {/* booth title들고오기 */}
            명진관 호떡
          </Typography>
          <Typography color="text.secondary" style={{ fontSize: '10px' }}>
            {/* booth intro 들고오기 */}
            맛있는 호떡과 다양한 음식
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
