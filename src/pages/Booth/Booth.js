import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import './Booth.css';
import Boothcard from '../../components/Booth/Boothcard';
import boothsearchC from '../../assets/img/boothsearchC.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import boothMap from '../../assets/img/boothMap.png';

// External Libraries //
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';

import { MapLoacation } from './style';

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

const BuildingLocationImage = styled.img`
  position: absolute;
  width: 15%;
  right: 253px;
  bottom: 6.5rem;
`;

const LocationImg = styled.img`
  margin-top: 1.8rem;
  margin-bottom: 10px;
  width: 90%;
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

const BoothContainer = styled.section`
  width: 100%;
  text-align: center;
  padding: 2rem 0rem 9rem 0;
`;
const BoothCardContainer = styled(motion.div)`
  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 1fr 1fr;
  width: 328px;
  margin: 0 auto;
  margin-top: 40px;
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

const dayArray = [
  {
    id: 1,
    date: 28,
    day: '?????????',
  },
  {
    id: 2,
    date: 29,
    day: '?????????',
  },
  {
    id: 3,
    date: 30,
    day: '?????????',
  },
];
const buildingArray = [
  {
    id: 1,
    building: '?????????',
  },
  {
    id: 2,
    building: '????????????',
  },
  {
    id: 3,
    building: '????????????',
  },
  {
    id: 4,
    building: '?????????',
  },
  {
    id: 5,
    building: '?????????',
  },
  {
    id: 6,
    building: '????????????',
  },
  {
    id: 7,
    building: '?????????',
  },
  {
    id: 8,
    building: '?????????',
  },
  {
    id: 9,
    building: '?????????',
  },
  {
    id: 10,
    building: '?????????',
  },
  {
    id: 11,
    building: '???????????????',
  },
  {
    id: 12,
    building: '????????????',
  },
];

export default function Booth({}) {
  const [booth, setBooth] = useState([
    {
      id: 1,
      boothType: '??????',
      title: '???????????????',
      location: '?????????',
      introduction: '????????? ????????? ????????? ??????',
      likeCnt: 20,
      images: [
        {
          id: 1,
          originFileName: '??????.jpg',
          serverFileName: '6fb151081add763ec08da678a9578eff',
          storedFilePath: 'https://han.gl/pYMEv',
        },
        {
          id: 2,
          originFileName: '??????.jpg',
          serverFileName: '6fb151081add763ec08da678a9578eff',
          storedFilePath: 'static//6fb151081add763ec08da678a9578eff.jpg',
        },
      ],
    },
  ]);

  // ?????? ??????
  const day = new Date();

  // todate??? 29?????? 2, 30?????? 3, ??? ???(28???)?????? 1
  const todate =
    day.getDate() - 27 === 2 ? 2 : day.getDate() - 27 === 3 ? 3 : 1;

  const [isToday, setIsToday] = useState(todate);
  const [isBuilding, setIsBuilding] = useState('?????????');
  const [isExist, setIsExist] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBooth(isToday, isBuilding);
  }, [isToday, isBuilding]);

  const fetchBooth = async (todate, isBuilding) => {
    try {
      const request = await axios.get(
        `/booths?day=${todate}&location=${isBuilding}`, //??????..??????.. ???????????????..!
      );
      setBooth(request.data);
      setIsLoading(true);
    } catch (error) {
      setIsExist(false);
      // console.log('ERROR', error);
    }
  };

  return isExist ? (
    <BoothContainer>
      <DateContainer>
        {/* api?????? ?????? :/api/booths?day={day}&location={location} */}
        {dayArray.map((i) => (
          <DayBox key={i.id} onClick={() => setIsToday(i.id)}>
            <BoxDate isActive={isToday === i.id}>{i.date}???</BoxDate>
            <BoxDay isActive={isToday === i.id}>{i.day}</BoxDay>
            {isToday === i.id ? <BoxHere layoutId="boxhe" /> : <BoxNotHere />}
          </DayBox>
        ))}
      </DateContainer>

      {isLoading ? (
        <>
          {/* ?????? ????????? */}
          <div style={{ position: 'relative' }}>
            <LocationImg alt={isBuilding} src={boothMap} className="fadeIn" />
            {MapLoacation(isBuilding)}
            {/* <BuildingLocationImage src={mainMapIcon} /> */}
          </div>
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
                </BuildingDetail>
              );
            })}
          </BuildingContainer>
          {/* map?????? ?????? ?????? ????????? */}
          <BoothCardContainer>
            {booth.length != 0 ? (
              // ????????? ????????? ?????????
              booth.map((boo) => {
                // console.log(boo.images[0].storedFilePath);
                return (
                  <Boothcard
                    key={boo.id}
                    boothId={boo.id}
                    title={boo.title}
                    intro={boo.introduction}
                    type={boo.boothType}
                    locationName={boo.location}
                    isLike={boo.isLike}
                    likeCount={boo.likeCnt}
                    boothImage={boo.images[0]}
                  />
                );
              })
            ) : (
              // ????????? ????????? ?????????
              <Stack sx={{ width: '328px', margin: '30px auto' }} spacing={2}>
                <div className="no-results__text">
                  <img src={boothsearchC} className="noResultImg" />
                  <p>???????????? ?????? ????????? ????????????.</p>
                </div>
              </Stack>
            )}
          </BoothCardContainer>
        </>
      ) : (
        <Fade in="true" unmountOnExit style={{ margin: '100px auto' }}>
          <CircularProgress />
        </Fade>
      )}
    </BoothContainer>
  ) : (
    <BoothContainer>
      <DateContainer>
        {/* api?????? ?????? :/api/booths?day={day}&location={location} */}
        {dayArray.map((i) => (
          <DayBox key={i.id} onClick={() => setIsToday(i.id)}>
            <BoxDate isActive={isToday === i.id}>{i.date}???</BoxDate>
            <BoxDay isActive={isToday === i.id}>{i.day}</BoxDay>
            {isToday === i.id ? <BoxHere layoutId="boxhe" /> : <BoxNotHere />}
          </DayBox>
        ))}
      </DateContainer>

      {/* ?????? ????????? */}
      <div style={{ position: 'relative' }}>
        <LocationImg alt={isBuilding} src={boothMap} className="fadeIn" />
        {MapLoacation(isBuilding)}
        {/* <BuildingLocationImage src={mainMapIcon} /> */}
      </div>
      {/* <LocationImg /> */}

      {/* {isBuilding === '????????????' ?  } */}
      {/* <LocationImg alt={isBuilding} src={boothMap} /> */}

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
            </BuildingDetail>
          );
        })}
      </BuildingContainer>
      <Stack sx={{ width: '328px', margin: '30px auto' }} spacing={2}>
        <div className="no-results__text">
          <img src={boothsearchC} className="noResultImg" />
          <p>???????????? ?????? ????????? ????????????.</p>
        </div>
      </Stack>
    </BoothContainer>
  );
}
