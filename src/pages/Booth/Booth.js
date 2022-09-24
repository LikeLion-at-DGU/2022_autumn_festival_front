import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import './Booth.css';
import '../../api/boothData.json';
import Boothcard from '../../components/Booth/Boothcard';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import boothMap from '../../assets/img/boothMap.png';

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
  margin-top: 1.8rem;
  margin-bottom: 10px;
  width: 90%;
`;

const BoothContainer = styled.section`
  width: 100%;
  text-align: center;
  padding: 2rem 0rem 9rem 0;
`;
const BoothCardContainer = styled.div`
  display: 'grid';
  grid-template-rows: '2fr';
  grid-template-columns: '1fr 1fr';
  width: '328px';
  margin: '0 auto';
  margin-top: '40px';
`;

const BuildingContainer = styled.div`
  margin-top: 10px;
`;

const BuildingDetail = styled(motion.button)`
  border: none;

  align-items: center;
  padding: 0px;

  font-family: 'GmarketSansMedium';
  font-size: 12px;
  width: 71px;
  height: 28px;

  margin: 3px;
  color: ${(props) => (props.isActive ? '#FD9903' : '#ffffff')};

  background-color: transparent;
  border-bottom: 2px solid
    ${(props) => (props.isActive ? '#FD9903' : 'rgba(256, 256, 256, 0.5)')};

  transition: 0.5s all;
`;

// const BuildingHere = styled(motion.div)`
//   height: 2px;
//   margin-top: 5px;
//   border-radius: 5px;
//   background-color: #fd9903;
// `;

// const BuildingNotHere = styled(motion.div)`
//   height: 1px;
//   border-radius: 5px;
//   background-color: #ffffff;
// `;
// #ffffff
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
const buildingArray = [
  {
    id: 1,
    building: '만해광장',
  },
  {
    id: 2,
    building: '대운동장',
  },
  {
    id: 3,
    building: '팔정도',
  },
  {
    id: 4,
    building: '명진관',
  },
  {
    id: 5,
    building: '원흥관',
  },
  {
    id: 6,
    building: '학생회관',
  },
  {
    id: 7,
    building: '학림관',
  },
  {
    id: 8,
    building: '다향관',
  },
  {
    id: 9,
    building: '법학관',
  },
  {
    id: 10,
    building: '혜화관',
  },
  {
    id: 11,
    building: '사회과학관',
  },
  {
    id: 12,
    building: '잉카페앞',
  },
];

export default function Booth({}) {
  const [booth, setBooth] = useState([
    {
      id: 1,
      type: '주점',
      title: '명진관호떡',
      introduction: '맛있는 호떡과 다양한 음식',
      like_count: 20,
      location: '원흥관',
      images: [
        {
          url: NoticeExImg,
        },
      ],
    },

    {
      id: 2,
      introduction: '으아가각아ㅏㄱ',
      title: '신공공룡',
      type: '푸드트럭',
      location: '신공학관',
      day: [1, 2, 3],
      like_count: 100,
    },
    {
      id: 3,
      introduction: '혜화아아아ㅏㄱ',
      title: '혜화관 햇님',
      type: '부스',
      location: '혜화관',
      day: [1, 2],
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content: '혜화아아아ㅏㄱ',
      like_count: 12,
    },
    {
      id: 4,
      introduction: '만해~10000Sun~',
      title: "히찬's With부쓰",
      type: '푸드트럭',
      location: '만해광장',
      day: [1, 3],
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content: '혜화아아아ㅏㄱ',
      like_count: 12,
    },
    {
      id: 5,
      introduction: 'CB~집가고싶네..',
      title: "Chan's Booth",
      type: '주점',
      location: '만해광장',
      day: [1, 2, 3],
      notice:
        '[운영 시간] 18시 오픈\n[운영 위치] 혜화관 앞\n또 사진을 찍어 인스타그램 스토리에 올린뒤 경찰사법대학 공식 계정을 태그하면 추첨을 통해 상품을 증정하는 이벤트도 하고 있으니 많은 이용 바랍니다 ㅎㅎ\n*** 테이블비 5,000원 있습니다. \n*** 주류 아이스 박스에 보관 가능하오니 사들고 오셔서 저희에게 맡겨 주세요!! ',
      content: '혜화관 앞',
      like_count: 999,
    },
    {
      id: 6,
      introduction: '만해~10000Sun~',
      title: '응답하라 100개',
      type: '부스',
      location: '만해광장',
      day: [1, 3],
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content: '혜화아아아ㅏㄱ',
      like_count: 12,
    },
    {
      id: 7,
      introduction: '만해~10000Sun~',
      title: '히찬쓰윗부쓰',
      type: '부스',
      location: '만해광장',
      day: [1, 3],
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content: '혜화아아아ㅏㄱ',
      like_count: 12,
    },
  ]);

  // 날짜 할당
  const day = new Date();

  // todate는 29일에 2, 30일에 3, 그 외(28일)에는 1
  const todate =
    day.getDate() - 27 === 2 ? 2 : day.getDate() - 27 === 3 ? 3 : 1;

  const [isToday, setIsToday] = useState(todate);
  const [isBuilding, setIsBuilding] = useState('만해광장');

  //todate,isbuilding 패치시키기
  useEffect(() => {
    fetchBooth(todate, isBuilding);
  }, [todate, isBuilding]);

  //api가져오기
  const fetchBooth = async (todate, isBuilding) => {
    try {
      const request = await axios.get(
        `/booths?day=${todate}&location=${isBuilding}`, //메뉴..까지.. 뒤지는건가..!
      );
      setBooth(request.data);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  //

  return (
    <BoothContainer>
      <DateContainer>
        {/* api호출 방법 :/api/booths?day={day}&location={location} */}
        {dayArray.map((i) => (
          <DayBox key={i.id} onClick={() => setIsToday(i.id)}>
            <BoxDate isActive={isToday === i.id}>{i.date}일</BoxDate>
            <BoxDay isActive={isToday === i.id}>{i.day}</BoxDay>
            {isToday === i.id ? <BoxHere layoutId="boxhe" /> : <BoxNotHere />}
          </DayBox>
        ))}
      </DateContainer>

      {/* 지도 이미지 */}
      <LocationImg alt={isBuilding} src={boothMap} />

      <BuildingContainer>
        {buildingArray.map((bu) => {
          return (
            <BuildingDetail
              key={bu.id}
              onClick={() => {
                setIsBuilding(bu.building);
              }}
              isActive={isBuilding === bu.building}
            >
              {bu.building}
              {/* {isBuilding === bu.building ? (
                <BuildingHere layoutId="buildinghe" />
              ) : (
                <BuildingNotHere />
              )} */}
            </BuildingDetail>
          );
        })}
      </BuildingContainer>

      {/* map으로 카드 뜨게 만들기 */}

      <BoothCardContainer>
        {booth.map((boo) => {
          return (
            <Boothcard
              key={boo.id}
              boothId={boo.id}
              title={boo.title}
              intro={boo.introduction}
              type={boo.type}
              locationName={boo.location}
              likeCount={boo.like_count}
              nowBuilding={isBuilding}
              nowDay={isToday}
              boothDay={boo.day}
            />
          );
        })}
      </BoothCardContainer>
    </BoothContainer>
  );
}
