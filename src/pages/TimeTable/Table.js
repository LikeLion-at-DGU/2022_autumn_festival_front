import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import FirstTable from './FirstTable';
import SecondTable from './SecondTable';
import ThridTable from './ThridTable';
import { useLocation } from 'react-router-dom';

const Container = styled.section`
    margin-top: 30px;
    width: auto;
    display: flex;
    justify-content: center;
    margin-bottom: ${props => props.isActive ? "550px" : "800px"};
`

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
    margin: 0px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -2px;
`

const BoxDate = styled.span`
    opacity: ${props => props.isActive ? 1 : 0.7};
    transition: all 0.5s;
    font-family: 'GmarketSansLight';
    margin-bottom: 3px;
`

const BoxDay = styled.span`
    transition: all 0.5s;
    font-size: 21px;
    margin-bottom: 7px;
    color:${props => props.isActive ? "#FFC909" : "#FFFFFF"};
`

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
        id : 1,
        date : 28,
        day: "수요일"
    },
    {
        id : 2,
        date : 29,
        day: "목요일"
    },
    {
        id : 3,
        date : 30,
        day: "금요일"
    },
]
 

function Table() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  // DateContainer 관련
  const day = new Date();

  // todate는 29일에 2, 30일에 3, 그 외(28일)에는 1
  const todate =
    day.getDate() - 27 === 2 ? 2 : day.getDate() - 27 === 3 ? 3 : 1;
  // 오늘이 몇일인지 확인하는 State(28일 : 1, 29일 : 2, 30일 : 3)
  const [isToday, setIsToday] = useState(todate);


    return(
        <Container isActive={isToday === 1 }>
            <Warpper>
                {/* 타임테이블 Header : 페이지 수요일,목요일,금요일 선택 카테고리 */}
                <DateContainer>
                    {dayArray.map(i => 
                        <DayBox key={i.id} onClick={()=>setIsToday(i.id)}>
                            <BoxDate isActive={isToday === i.id}>{i.date}일</BoxDate>
                            <BoxDay isActive={isToday === i.id}>{i.day}</BoxDay>
                            {isToday === i.id ? <BoxHere layoutId="boxhere"/> : <BoxNotHere/>}
                        </DayBox>
                        )}
                </DateContainer>
                {/* 타임테이블 Header에서 선택한 날짜에 따른 컴포넌트 보여주기 */}
                {
                    isToday === 1 ? <FirstTable /> : isToday === 2 ? <SecondTable /> : <ThridTable />
                }
                {/* 눌렀을 때 슬라이더로 움직이게?*/}
            </Warpper>
        </Container>
    )
}

export default Table;
