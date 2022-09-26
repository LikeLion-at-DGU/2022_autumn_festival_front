import styled from 'styled-components';
import TitleImg from '../../assets/img/mainTime.png';
import { Link } from 'react-router-dom';
import ShowTable28 from './ShowTable28';

const Container = styled.section`
  width: auto;
  height: 87vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: auto;
  height: 65px;
  margin-right: 20px;
  margin-bottom: -30px;
`;

const Btn = styled(Link)`
  cursor: pointer;
  border: none;
  box-shadow: 1px 1px 10px 0px rgb(255, 255, 255);
  background-color: #fd9903;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  color: white;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 18px;
  margin-bottom: 30px;
`;

const WhatDay = styled.h6`
  font-size: 20px;
  font-family: 'GmarketSansLight';
`

const TimeTable = styled.div`
  margin-top: -30px;
  background: linear-gradient(180deg, rgba(68, 114, 153, 0.5) 0%, rgba(110, 129, 158, 0.055) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 80%;
  height: 450px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`




function TimeTableSection() {
  const day = new Date();
  // todate는 29일에 29, 30일에 30, 그 외(28일)에는 28
  const todate = day.getDate() - 27 === 2 ? 29 : day.getDate() - 27 === 3 ? 30 : 28;
  return (
    <Container>
      <Img src={TitleImg} />
      <WhatDay>{todate}일</WhatDay>
      <TimeTable>
          <ShowTable28 />
      </TimeTable>
      <Btn to="/timetable">전체 일정보기</Btn>
    </Container>
  );
}
export default TimeTableSection;
