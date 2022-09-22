import React, { useState } from 'react';
import './Booth.css';
import '../../api/boothData.json';
import Boothcard from '../../components/Booth/Boothcard';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);
`;

const DayBox = styled.div`
  bottom: 0;
  margin: 0px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -2px;
`;

const BoxDate = styled.span`
  opacity: ${(props) => (props.isActive ? 1 : 0.7)};
  transition: all 0.5s;
  font-family: 'GmarketSansLight';
  margin-bottom: 3px;
`;

const BoxDay = styled.span`
  font-size: 21px;
  margin-bottom: 7px;
  color: ${(props) => (props.isActive ? '#FFC909' : '#FFFFFF')};
`;

const BoxHere = styled(motion.div)`
  height: 2px;
  width: 60px;
  border-radius: 5px;
  background-color: #ffc909;
`;

const BoxNotHere = styled(motion.div)`
  height: 2px;
  width: 50px;
  border-radius: 5px;
`;

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
const BoothCardContainer = styled.div`
  gridTemplateRows: "1fr",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
`;

const dayArray = [
  {
    id: 1,
    date: 28,
    day: '수요일',
  },
  {
    id: 2,
    date: 29,
    day: '목요일',
  },
  {
    id: 3,
    date: 30,
    day: '금요일',
  },
];

export default function Booth({}) {
  const [booth, setBooth] = useState([
    {
      id: 1,
      introduction: '맛있는 호떡과 다양한 음식',
      title: '명진관호떡',
      type: '주점',
      location: ['원흥관', 8],
      Day: [28, 29, 30],
      locationImage: 'imgURL?',
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',

      content:
        '맛있는 호떡 먹고 가세요~  호호 ~ 불어먹먹는 떡이라~ 호떠 ~ 아니에요~~호호호홓ㅎ',
      likeCount: 20,
      menu: [
        {
          name: '붕어빵',
          price: 1000,
        },
        {
          name: '호떡',
          price: 3000,
        },
      ],
    },

    {
      id: 2,
      introduction: '으아가각아ㅏㄱ',
      title: '신공공룡',
      type: '푸드트럭',
      location: ['신공', 10],
      Day: [28, 29, 30],
      locationImage: 'imgURL?',
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content: '으아악',
      likeCount: 100,
      menu: [
        {
          name: '붕어빵',
          price: 1000,
        },
        {
          name: '호떡',
          price: 3000,
        },
      ],
    },
    {
      id: 3,
      introduction: '혜화아아아ㅏㄱ',
      title: '혜화관 햇님',
      type: '부스',
      location: ['헤화관', 3],
      Day: [28, 29, 30],
      locationImage: 'imgURL?',
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content: '혜화아아아ㅏㄱ',
      likeCount: 12,
      menu: [
        {
          name: '붕어빵',
          price: 1000,
        },
        {
          name: '호떡',
          price: 3000,
        },
      ],
    },
  ]);

  // 날짜 할당
  const day = new Date();

  // todate는 29일에 2, 30일에 3, 그 외(28일)에는 1
  const todate =
    day.getDate() - 27 === 2 ? 2 : day.getDate() - 27 === 3 ? 3 : 1;

  const [isToday, setIsToday] = useState(todate);
  const navigate = useNavigate();

  return (
    <BoothContainer>
      {/* 지도 이미지 */}
      <LocationImg
        alt="팔정도"
        src="https://velog.velcdn.com/images/seochan99/post/bfed67d9-30c2-4d59-ae59-7fa0d077618b/image.png"
      />
      {/* 날짜 category */}
      <DateContainer>
        {dayArray.map((i) => (
          <DayBox key={i.id} onClick={() => setIsToday(i.id)}>
            <BoxDate isActive={isToday === i.id}>{i.date}일</BoxDate>
            <BoxDay isActive={isToday === i.id}>{i.day}</BoxDay>
            {isToday === i.id ? <BoxHere layoutId="boxhe" /> : <BoxNotHere />}
          </DayBox>
        ))}
      </DateContainer>

      {/* map으로 카드 뜨게 만들기 */}
      <BoothCardContainer>
        {booth.map((boo) => {
          return (
            <Boothcard
              title={boo.title}
              intro={boo.introduction}
              type={boo.type}
              locationName={boo.location[0]}
              locationNum={boo.location[1]}
              likeCount={boo.likeCount}
              // onClick={() => {
              //   window.location.href = `/booth${boo.id}`;
              // }}
            />
          );
        })}

        {/* <Boothcard />
        <Boothcard />
        <Boothcard />
        <Boothcard />
        <Boothcard /> */}
      </BoothCardContainer>
    </BoothContainer>
  );
}
