import React, { useState } from 'react';
import './Booth.css';
import '../../api/boothData.json';
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
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -2px;
`;

const BoxDate = styled.span`
  font-weight: 200;
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
      type: '부스',
      location: {
        명진관: 9,
      },
      Day: [28, 29, 30],
      locationImage: 'imgURL?',
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content:
        '맛있는 호떡 먹고 가세요~  호호 ~ 불어먹먹는 떡이라~ 호떠 ~ 아니에요~~호호호홓ㅎ',
      menu: {
        호떡: 2000,
        붕어빵: 1000,
      },
    },

    {
      id: 2,
      introduction: '맛있는 호떡과 다양한 음식',
      title: '신공공룡',
      type: '주점',
      location: {
        신공: 10,
      },
      Day: [28, 29, 30],
      locationImage: 'imgURL?',
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content:
        '맛있는 호떡 먹고 가세요~  호호 ~ 불어먹먹는 떡이라~ 호떠 ~ 아니에요~~호호호홓ㅎ',
      menu: {
        으아: 2000,
        으아아악: 1000,
      },
    },
  ]);

  // 날짜 할당
  const day = new Date();
  // todate는 29일에 2, 30일에 3, 그 외(28일)에는 1
  const todate =
    day.getDate() - 27 === 2 ? 2 : day.getDate() - 27 === 3 ? 3 : 1;
  const [isToday, setIsToday] = useState(todate);

  return (
    <BoothContainer>
      <LocationImg
        alt="팔정도"
        src="https://velog.velcdn.com/images/seochan99/post/bfed67d9-30c2-4d59-ae59-7fa0d077618b/image.png"
      />

      <DateContainer>
        {dayArray.map((i) => (
          <DayBox key={i.id} onClick={() => setIsToday(i.id)}>
            <BoxDate>{i.date}일</BoxDate>
            <BoxDay isActive={isToday === i.id}>{i.day}</BoxDay>
            {isToday === i.id ? <BoxHere layoutId="boxhere" /> : <BoxNotHere />}
          </DayBox>
        ))}
      </DateContainer>
    </BoothContainer>
  );
}
