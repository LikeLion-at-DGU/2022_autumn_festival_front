import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Container = styled.section`
  margin-top: 30px;
  width: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 100px; // 작업할 때 footer 잠시 멀리두기
`;

const Warpper = styled.section`
  width: 88%;
  height: 100px;
`;

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

function Table() {
  // DateContainer 관련
  const day = new Date();

  // todate는 29일에 2, 30일에 3, 그 외(28일)에는 1
  const todate =
    day.getDate() - 27 === 2 ? 2 : day.getDate() - 27 === 3 ? 3 : 1;
  // 오늘이 몇일인지 확인하는 State(28일 : 1, 29일 : 2, 30일 : 3)
  const [isToday, setIsToday] = useState(todate);

  return (
    <Container>
      <Warpper>
        {/* 타임테이블 Header : 페이지 수요일,목요일,금요일 선택 카테고리 */}
        <DateContainer>
          {dayArray.map((i) => (
            <DayBox key={i.id} onClick={() => setIsToday(i.id)}>
              <BoxDate>{i.date}일</BoxDate>
              <BoxDay isActive={isToday === i.id}>{i.day}</BoxDay>
              {isToday === i.id ? (
                <BoxHere layoutId="boxhere" />
              ) : (
                <BoxNotHere />
              )}
            </DayBox>
          ))}
        </DateContainer>
        {/* 타임테이블 Header에서 선택한 날짜에 따른 컴포넌트 보여주기 */}
      </Warpper>
    </Container>
  );
}

export default Table;
