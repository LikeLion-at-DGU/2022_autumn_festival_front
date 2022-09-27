import styled from 'styled-components';
import { motion } from 'framer-motion';
import PinImg from '../../assets/img/pin.png';
import { useNavigate } from 'react-router-dom';
import Hynn from '../../assets/img/timetableHYNN.png';
import Yoon from '../../assets/img/timetableYoonha.png';
import Itzy from '../../assets/img/timetableITZY.png';
import List from '../../assets/img/list.png';

const Container = styled(motion.section)`
  width: auto;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  margin-top: 30px;
`;

const BoothBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CenterLine = styled.div`
  margin-top: 50px;
  width: 1px;
  height: 740px;
  background-color: white;
  border-radius: 5px;
`;

const PerFormBox = styled.div``;

const TitleBox = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
  }
  div {
    height: 1px;
  }
`;

{
  /* Booth 타임테이블 각 테이블 정보 */
}
const BoothItem = styled(motion.div)`
  display: flex;
`;

const BoothInfoContainer = styled(motion.div)`
  margin-right: 15px;
`;

const BoothPoint = styled.div`
  z-index: 0;
  margin-right: -8px;
  margin-top: 1px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #579aff;
`;

const BoothInfoTime = styled.span`
  margin-bottom: -15px;
  display: flex;
  justify-content: flex-end;
  color: #579aff;
`;

const BoothInfoBox = styled.div`
  border-right: 1px solid #00baf4;
  width: 150px;
  padding-bottom: 7px;
  background: linear-gradient(
    270deg,
    rgba(87, 154, 255, 0.3) 0%,
    rgba(0, 186, 244, 0.006) 100%
  );
`;

const BoothInfoItem = styled.div`
  padding-right: 10px;
`;

const BoothInfoItemTitle = styled.h1`
  padding-top: 7px;
  display: flex;
  word-spacing: -2px;
  justify-content: flex-end;
`;

const BoothInfoItemSub = styled.div`
  margin-top: -15px;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: flex-end;
  span {
    font-family: 'GmarketSansLight';
    font-size: 13px;
  }
  img {
    margin-bottom: 3px;
    margin-left: 5px;
    width: 10px;
    height: 15px;
  }
`;

const BoothBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  margin-top: 5px;
`;

const GoToBtn = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 6px 10px;
  border-radius: 10px;
  margin-bottom: 3px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  span {
    font-size: 12px;
  }
`;

{
  /* PerFormanANCE 타임테이블 각 테이블 정보 */
}
const PerBox = styled(motion.div)`
  display: flex;
`;

const PerInfoContainer = styled.div`
  margin-left: 15px;
`;

const PerPoint = styled.div`
  z-index: 0;
  margin-left: -9px;
  margin-top: 1px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ff6b6b;
`;

const PerInfoTime = styled.span`
  margin-bottom: -15px;
  display: flex;
  justify-content: flex-start;
  color: #ff6b6b;
`;

const PerInfoBox = styled.div`
  border-left: 1px solid #ff6b6b;
  width: 150px;
  padding-bottom: 7px;
  background: linear-gradient(
    270deg,
    rgba(255, 107, 107, 0.006) 0%,
    rgba(255, 107, 107, 0.3) 106.2%
  );
`;

const PerInfoItem = styled.div`
  padding-left: 10px;
`;

const PerInfoItemTitle = styled.h1`
  padding-top: 7px;
  display: flex;
  justify-content: flex-start;
`;

const PerInfoItemSub = styled.div`
  margin-top: -15px;
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: flex-start;
  span {
    font-family: 'GmarketSansLight';
    font-size: 13px;
  }
  img {
    margin-bottom: 3px;
    margin-right: 5px;
    width: 10px;
    height: 15px;
  }
`;

const PerChart1 = styled.div`
    opacity: 0.8;
    background-color: white;
    width: 100px;
    height: 130px;
    margin-top: 10px;
    border-radius: 4px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ListImg = styled.img`
  width: 90%;
  height: 80%;
`

const PerChart2 = styled.div`
  opacity: 0.8;
  background-color: white;
  width: 100px;
  margin-top: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  padding: 15px 12px;
`;

const PerChart2Item = styled.div`
  display: flex;
  align-items: center;
`;

const StarImg = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  margin-right: 5px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

const StarName = styled.span`
  color: black;
  font-size: 14px;
  font-family: 'GmarketSansLight';
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

function SecondTable() {
  const navigate = useNavigate();

  return (
    <Container variants={boxVariants} initial="start" animate="end">
      <BoothBox>
        <TitleBox>
          <span>BOOTH</span>
          <div style={{ backgroundColor: '#579AFF', width: '62px' }}></div>
        </TitleBox>
        {/* Booth 첫번째 */}
        <BoothItem variants={childVariants} style={{ marginTop: '50px' }}>
          <BoothInfoContainer>
            <BoothInfoTime>11:00 - 18:00</BoothInfoTime>
            <BoothInfoBox>
              <BoothInfoItem>
                <BoothInfoItemTitle>오락기 & 외부부스</BoothInfoItemTitle>
                <BoothInfoItemSub>
                  <span>만해광장</span>
                  <img src={PinImg} />
                </BoothInfoItemSub>
              </BoothInfoItem>
              <BoothInfoItem>
                <BoothInfoItemTitle>푸드트럭 & 교내부스</BoothInfoItemTitle>
                <BoothInfoItemSub>
                  <span>팔정도</span>
                  <img src={PinImg} />
                </BoothInfoItemSub>
              </BoothInfoItem>
              <BoothBtnContainer>
                <GoToBtn onClick={() => navigate('/booth')}>
                  <span>부스 보러가기</span>
                </GoToBtn>
              </BoothBtnContainer>
            </BoothInfoBox>
          </BoothInfoContainer>
          <BoothPoint />
        </BoothItem>

        {/* Booth 두번째 */}
        <BoothItem variants={childVariants} style={{ marginTop: '80px' }}>
          <BoothInfoContainer>
            <BoothInfoTime>18:00 - 22:00 ~</BoothInfoTime>
            <BoothInfoBox>
              <BoothInfoItem>
                <BoothInfoItemTitle>야시장</BoothInfoItemTitle>
                <BoothInfoItemSub>
                  <span>만해광장</span>
                  <img src={PinImg} />
                </BoothInfoItemSub>
              </BoothInfoItem>
              <BoothInfoItem>
                <BoothInfoItemTitle>주점 & 외부부스</BoothInfoItemTitle>
                <BoothInfoItemSub>
                  <span>학교 전체</span>
                  <img src={PinImg} />
                </BoothInfoItemSub>
              </BoothInfoItem>
              <BoothBtnContainer>
                <GoToBtn onClick={() => navigate('/booth')}>
                  <span>주점 보러가기</span>
                </GoToBtn>
              </BoothBtnContainer>
            </BoothInfoBox>
          </BoothInfoContainer>
          <BoothPoint />
        </BoothItem>
      </BoothBox>
      <CenterLine />
      <PerFormBox>
        <TitleBox>
          <span>PERFORMANCE</span>
          <div style={{ backgroundColor: '#FF6B6B', width: '125px' }}></div>
        </TitleBox>
        {/* Performance 첫번쨰 */}
        <PerBox variants={childVariants} style={{ marginTop: '160px' }}>
          <PerPoint />
          <PerInfoContainer>
            <PerInfoTime>14:00 - 19:00</PerInfoTime>
            <PerInfoBox>
              <PerInfoItem>
                <PerInfoItemTitle>동연제</PerInfoItemTitle>
                <PerInfoItemSub>
                  <img src={PinImg} />
                  <span>대운동장</span>
                </PerInfoItemSub>
                <PerChart1>
                    <ListImg src={List} />                   
                </PerChart1>
              </PerInfoItem>
            </PerInfoBox>
          </PerInfoContainer>
        </PerBox>

        {/* Performance 두번쨰 */}
        <PerBox variants={childVariants} style={{ marginTop: '20px' }}>
          <PerPoint />
          <PerInfoContainer>
            <PerInfoTime>19:00 - 20:00</PerInfoTime>
            <PerInfoBox>
              <PerInfoItem>
                <PerInfoItemTitle>디제잉</PerInfoItemTitle>
                <PerInfoItemSub>
                  <img src={PinImg} />
                  <span>대운동장</span>
                </PerInfoItemSub>
              </PerInfoItem>
            </PerInfoBox>
          </PerInfoContainer>
        </PerBox>

        {/* Performance 세번쨰 */}
        <PerBox variants={childVariants} style={{ marginTop: '40px' }}>
          <PerPoint />
          <PerInfoContainer>
            <PerInfoTime>20:15 - 22:00 ~</PerInfoTime>
            <PerInfoBox>
              <PerInfoItem>
                <PerInfoItemTitle>연예인 공연</PerInfoItemTitle>
                <PerInfoItemSub>
                  <img src={PinImg} />
                  <span>대운동장</span>
                </PerInfoItemSub>
                <PerChart2>
                  <PerChart2Item>
                    <StarImg src={Yoon} />
                    <StarName>HYNN</StarName>
                  </PerChart2Item>

                  <PerChart2Item style={{ marginTop: '-10px' }}>
                    <StarImg src={Hynn} />
                    <StarName>Yoonha</StarName>
                  </PerChart2Item>
                  <PerChart2Item style={{ marginTop: '-10px' }}>
                    <StarImg src={Itzy} />
                    <StarName>ITZY</StarName>
                  </PerChart2Item>
                </PerChart2>
              </PerInfoItem>
            </PerInfoBox>
          </PerInfoContainer>
        </PerBox>
      </PerFormBox>
    </Container>
  );
}

export default SecondTable;
