import * as React from 'react';
import axios from '../../api/axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Boothcard.css';
import styled from 'styled-components';

import boothDefaultImg from '../../assets/img/부스_default.png';
import JoojumDefaultImg from '../../assets/img/주점_default.png';
import FoodDefaultImg from '../../assets/img/푸드트럭_default.png';
import FleaDefaultImg from '../../assets/img/플리마켓_default.png';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Location_number = styled.p`
  font-size: 9px;
  left: 10rem;
  display: inline;
  float: left;
  margin-left: 19px;
  margin-top: 5px;
  color: #fd9903;
  font-weight: 800;
  padding-right: 6px;
`;

const BoothLike = styled.div`
  font-size: 9px;
  display: inline;
  float: right;
  margin-right: 10px;

  margin-top: 5px;
`;

const BoothLikeNum = styled.div`
  font-size: 10px;
  position: absolute;
  display: inline;
  float: right;
  left: 8.2rem;
  bottom: 4.72rem;
`;

const JoojumBoothBorder = styled.div`
  position: absolute;
  font-size: 8px;
  border: none;
  border-radius: 2px;
  padding: 2px 5px;
  // 부스일때
  background-color: #ff6b6b;
  //
  margin: 5px;
  color: white;
`;

const BoothBorder = styled.div`
  position: absolute;
  font-size: 8px;
  border: none;
  border-radius: 2px;
  padding: 2px 5px;
  // 부스일때
  background-color: #0b9908;
  //
  margin: 5px;
  color: white;
`;
const FoodBorder = styled.div`
  position: absolute;
  font-size: 8px;
  border: none;
  border-radius: 2px;
  padding: 2px 5px;
  // 부스일때
  background-color: #2676ee;
  //
  margin: 5px;
  color: white;
`;

const FleaBorder = styled.div`
  position: absolute;
  font-size: 8px;
  border: none;
  border-radius: 2px;
  padding: 2px 5px;
  // 부스일때
  background-color: #ae66e7;
  //
  margin: 5px;
  color: white;
`;

const boxVariants = {
  start: {
    opactiy: 0,
    scale: 1,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

// 부스 #0b9908
// 주점 #FF6B6B
// 받아서 다른 이름일때 디른 색깔
export default function Boothcard({
  boothId,
  title,
  intro,
  type,
  locationName,
  isLike,
  likeCount,
  boothImage,
}) {
  const HeartView = () => {
    return isLike ? (
      <FavoriteIcon
        style={{
          fontSize: '10px',
          color: 'red',
          float: 'right',
          margin: '5px',
        }}
      />
    ) : (
      <FavoriteBorderIcon
        style={{ fontSize: '10px', float: 'right', margin: '5px' }}
      />
    );
  };
  //리스트에 요소 있는지 찾기
  // 만약 boothDay리스트에 nowDay와 동일한게 있다면 true반환 아니면 false
  return (
    <Card
      sx={{ width: '130', margin: '11.6px' }}
      className="cardCss fadeIn"
      style={{
        fontFamily: 'GmarketSansMedium',
        borderRadius: '10px',
        boxShadow: '2px 5px 12px 2px rgb(0, 0, 0)',
        flexDirection: 'row',
        transition: '0.5s all',
      }}
    >
      <CardActionArea href={`/booth/${boothId}`}>
        {/* type에 따라 다른 색 뜨게하기  */}

        {type === '주점' ? (
          <JoojumBoothBorder
            style={{
              fontFamily: 'GmarketSansMedium',
              boxShadow: '1px 1px 6px rgb(0, 0, 0)',
            }}
          >
            {type}
          </JoojumBoothBorder>
        ) : type === '부스' ? (
          <BoothBorder
            style={{
              fontFamily: 'GmarketSansMedium',
              boxShadow: '1px 1px 6px rgb(0, 0, 0)',
            }}
          >
            {type}
          </BoothBorder>
        ) : type === '푸드트럭' ? (
          <FoodBorder
            style={{
              fontFmily: 'GmarketSansMedium',
              boxShadow: '1px 1px 6px rgb(0, 0, 0)',
            }}
          >
            {type}
          </FoodBorder>
        ) : (
          //fela마켓
          <FleaBorder
            style={{
              fontFmily: 'GmarketSansMedium',
              boxShadow: '1px 1px 6px rgb(0, 0, 0)',
            }}
          >
            {type}
          </FleaBorder>
        )}

        {type === '주점' ? (
          <CardMedia
            component="img"
            height="105"
            image={
              boothImage
                ? process.env.REACT_APP_SERVER_PORT +
                  boothImage['storedFilePath']
                : JoojumDefaultImg
            }
            alt="부스 이미지"
          />
        ) : type === '부스' ? (
          <CardMedia
            component="img"
            height="105"
            image={
              boothImage
                ? process.env.REACT_APP_SERVER_PORT +
                  boothImage['storedFilePath']
                : boothDefaultImg
            }
            alt="부스 이미지"
          />
        ) : type === '푸드트럭' ? (
          <CardMedia
            component="img"
            height="105"
            image={
              boothImage
                ? process.env.REACT_APP_SERVER_PORT +
                  boothImage['storedFilePath']
                : FoodDefaultImg
            }
            alt="부스 이미지"
          />
        ) : (
          //fela마켓
          <CardMedia
            component="img"
            height="105"
            image={
              boothImage
                ? process.env.REACT_APP_SERVER_PORT +
                  boothImage['storedFilePath']
                : FleaDefaultImg
            }
            alt="부스 이미지"
          />
        )}

        {/* <CardMedia
          component="img"
          height="105"
          image={
            boothImage
              ? 'http://192.168.0.194:8080' + boothImage['storedFilePath']
              : noticeExImg
          }
          alt="부스 이미지"
        /> */}
        <Location_number>
          <LocationOnIcon
            style={{ fontSize: '10px', position: 'absolute', left: '8px' }}
          />
          {locationName}
        </Location_number>
        <BoothLike>{likeCount}</BoothLike>
        {HeartView()}
        <CardContent
          style={{ marginTop: '15px', fontFamily: 'GmarketSansMedium' }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            style={{
              fontSize: '15px',
              fontFamily: 'GmarketSansBold',
              fontWeight: '800',
            }}
          >
            {/* booth title들고오기 */}
            {title}
          </Typography>

          <Typography color="text.secondary" style={{ fontSize: '11px' }}>
            {/* booth intro 들고오기 */}
            {intro}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
