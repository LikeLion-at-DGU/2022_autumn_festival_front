import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import TitleImg from '../../assets/img/mainTop.png';
import NoImg from '../../assets/img/mainNoBooth.png';
import ExImg from '../../assets/img/noticeExImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Container = styled.section`
  width: auto;
  height: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -160px;
`;

const Img = styled.img`
  width: auto;
  height: 65px;
  margin-right: 21px;
  margin-bottom: 30px;
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
`;

const BoothSection = styled(motion.div)`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 35px;
`;

const Box = styled(motion.div)`
  width: 150px;
  height: 210px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  color: black;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const NoBox = styled.img`
  width: 150px;
  height: 210px;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BoxSection1 = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 220px;
  div {
    position: absolute;
    box-sizing: border-box;
  }
  div:nth-child(1) {
    z-index: 5;
  }
  div:nth-child(2) {
    z-index: 4;
    right: 40px;
    top: -10px;
    scale: 0.8;
  }
  div:nth-child(3) {
    z-index: 3;
    right: 0px;
    top: -20px;
    scale: 0.6;
  }
  div:nth-child(4) {
    z-index: 2;
    right: -40px;
    top: -30px;
    scale: 0.35;
  }
  div:nth-child(5) {
    z-index: 1;
    right: -80px;
    top: -40px;
    scale: 0;
  }
`;

const BoxSection2 = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 220px;
  div {
    position: absolute;
    box-sizing: border-box;
  }
  div:nth-child(1) {
    z-index: 3;
    left: 40px;
    top: -10px;
    scale: 0.8;
  }
  div:nth-child(2) {
    z-index: 4;
  }
  div:nth-child(3) {
    z-index: 3;
    right: 40px;
    top: -10px;
    scale: 0.8;
  }
  div:nth-child(4) {
    z-index: 2;
    right: 0px;
    top: -20px;
    scale: 0.6;
  }
  div:nth-child(5) {
    z-index: 1;
    right: -40px;
    top: -30px;
    scale: 0.4;
  }
`;

const BoxSection3 = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 220px;
  div {
    position: absolute;
    box-sizing: border-box;
  }
  div:nth-child(1) {
    z-index: 1;
    left: 0px;
    top: -20px;
    scale: 0.6;
  }
  div:nth-child(2) {
    z-index: 2;
    left: 40px;
    top: -10px;
    scale: 0.8;
  }
  div:nth-child(3) {
    z-index: 3;
  }
  div:nth-child(4) {
    z-index: 2;
    right: 40px;
    top: -10px;
    scale: 0.8;
  }
  div:nth-child(5) {
    z-index: 1;
    right: 0px;
    top: -20px;
    scale: 0.6;
  }
`;

const BoxSection4 = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 220px;
  div {
    position: absolute;
    box-sizing: border-box;
  }
  div:nth-child(1) {
    scale: 0.4;

    z-index: 1;
    left: -40px;
    top: -30px;
  }
  div:nth-child(2) {
    scale: 0.6;

    z-index: 2;
    left: 0px;
    top: -20px;
  }
  div:nth-child(3) {
    scale: 0.8;

    left: 40px;
    top: -10px;
    z-index: 3;
  }
  div:nth-child(4) {
    z-index: 4;
  }
  div:nth-child(5) {
    scale: 0.8;
    z-index: 3;
    right: 40px;
    top: -10px;
  }
`;

const BoxSection5 = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 220px;
  div {
    position: absolute;
    box-sizing: border-box;
  }
  div:nth-child(1) {
    z-index: 1;
    left: -80px;
    top: -40px;
    scale: 0;
  }
  div:nth-child(2) {
    z-index: 2;
    scale: 0.35;
    left: -40px;
    top: -30px;
  }
  div:nth-child(3) {
    scale: 0.6;
    left: 0px;
    top: -20px;
    z-index: 3;
  }
  div:nth-child(4) {
    scale: 0.8;
    left: 40px;
    top: -10px;
    z-index: 4;
  }
  div:nth-child(5) {
    scale: 1;
    z-index: 5;
  }
`;

const BoxImg = styled.img`
  height: 50%;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const BoxInfo = styled.section`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxInfoHeader = styled.section`
  display: flex;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  margin-top: 8px;
`;
const BoxInfoFirstItem = styled.section`
  color: #fd9903;
`;

const PinIcon = styled(FontAwesomeIcon)`
  margin-right: 3px;
`;

const BoxInfoSecondItem = styled.section``;

const HeartIcon = styled(FontAwesomeIcon)`
  color: #fd9903;
  margin-right: 3px;
`;

const BoxTitle = styled.h1`
  font-size: 17px;
  margin-top: 13px;
  width: 90%;
`;

const BoxSubTitle = styled.h6`
  font-family: 'GmarketSansLight';
  font-size: 11px;
  margin-top: -15px;
  width: 90%;
`;

function TopBoothSection() {
  const [booth, setData] = useState([]);
  const navigate = useNavigate();
  const day = new Date();
  const todate =
    day.getDate() === 28
      ? 1
      : day.getDate() === 29
      ? 1
      : day.getDate() === 30
      ? 1
      : 0;
  const fetchBooth = async () => {
    try {
      const request = await axios.get(`/booths/top5`);
      const data = [
        request.data[3],
        request.data[1],
        request.data[0],
        request.data[2],
        request.data[4],
      ];
      setData(data);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  console.log(booth);
  useEffect(() => {
    fetchBooth();
  }, []);

  const [visible, setVisible] = useState(3);

  const onClick = (i, v) => {
    if (visible === v) {
      navigate(`/booth/${i}`);
    } else {
      setVisible(v);
    }
  };

  return (
    <Container>
      <Img src={TitleImg} />
      {todate === 0 ? (
        <BoothSection>
          <NoBox src={NoImg} />
        </BoothSection>
      ) : (
        <BoothSection id="box">
          {visible === 1 ? (
            /* 1 */
            <BoxSection1>
              {booth?.map((i, v) => {
                return (
                  <Box
                    onClick={() => onClick(i.id, v + 1)}
                    key={i.id}
                    layoutId={i.id + ''}
                  >
                    <BoxImg
                      src={i.images[0] ? i.images[0]['storedFilePath'] : ExImg}
                    />
                    <BoxInfo>
                      <BoxInfoHeader>
                        <BoxInfoFirstItem>
                          <PinIcon icon={faLocationDot} />
                          <span>{i.location}</span>
                        </BoxInfoFirstItem>
                        <BoxInfoSecondItem>
                          <HeartIcon icon={faHeart} />
                          <span>{i.likeCnt}</span>
                        </BoxInfoSecondItem>
                      </BoxInfoHeader>
                      <BoxTitle>{i.title}</BoxTitle>
                      <BoxSubTitle>
                        {i.introduction.length > 19
                          ? `${i.introduction.substr(0, 20)}...`
                          : i.introduction}
                      </BoxSubTitle>
                    </BoxInfo>
                  </Box>
                );
              })}
            </BoxSection1>
          ) : visible === 2 ? (
            /* 2 */
            <BoxSection2>
              {booth?.map((i, v) => {
                return (
                  <Box
                    onClick={() => onClick(i.id, v + 1)}
                    key={i.id}
                    layoutId={i.id + ''}
                  >
                    <BoxImg
                      src={i.images[0] ? i.images[0]['storedFilePath'] : ExImg}
                    />
                    <BoxInfo>
                      <BoxInfoHeader>
                        <BoxInfoFirstItem>
                          <PinIcon icon={faLocationDot} />
                          <span>{i.location}</span>
                        </BoxInfoFirstItem>
                        <BoxInfoSecondItem>
                          <HeartIcon icon={faHeart} />
                          <span>{i.likeCnt}</span>
                        </BoxInfoSecondItem>
                      </BoxInfoHeader>
                      <BoxTitle>{i.title}</BoxTitle>
                      <BoxSubTitle>
                        {i.introduction.length > 19
                          ? `${i.introduction.substr(0, 20)}...`
                          : i.introduction}
                      </BoxSubTitle>
                    </BoxInfo>
                  </Box>
                );
              })}
            </BoxSection2>
          ) : visible === 3 ? (
            /* 3 */
            <BoxSection3>
              {booth?.map((i, v) => {
                return (
                  <Box
                    onClick={() => onClick(i.id, v + 1)}
                    key={i.id}
                    layoutId={i.id + ''}
                  >
                    <BoxImg
                      src={i.images[0] ? i.images[0]['storedFilePath'] : ExImg}
                    />
                    <BoxInfo>
                      <BoxInfoHeader>
                        <BoxInfoFirstItem>
                          <PinIcon icon={faLocationDot} />
                          <span>{i.location}</span>
                        </BoxInfoFirstItem>
                        <BoxInfoSecondItem>
                          <HeartIcon icon={faHeart} />
                          <span>{i.likeCnt}</span>
                        </BoxInfoSecondItem>
                      </BoxInfoHeader>
                      <BoxTitle>{i.title}</BoxTitle>
                      <BoxSubTitle>
                        {i.introduction.length > 19
                          ? `${i.introduction.substr(0, 20)}...`
                          : i.introduction}
                      </BoxSubTitle>
                    </BoxInfo>
                  </Box>
                );
              })}
            </BoxSection3>
          ) : visible === 4 ? (
            /* 4가 앞 */
            <BoxSection4>
              {booth?.map((i, v) => {
                return (
                  <Box
                    onClick={() => onClick(i.id, v + 1)}
                    key={i.id}
                    layoutId={i.id + ''}
                  >
                    <BoxImg
                      src={i.images[0] ? i.images[0]['storedFilePath'] : ExImg}
                    />
                    <BoxInfo>
                      <BoxInfoHeader>
                        <BoxInfoFirstItem>
                          <PinIcon icon={faLocationDot} />
                          <span>{i.location}</span>
                        </BoxInfoFirstItem>
                        <BoxInfoSecondItem>
                          <HeartIcon icon={faHeart} />
                          <span>{i.likeCnt}</span>
                        </BoxInfoSecondItem>
                      </BoxInfoHeader>
                      <BoxTitle>{i.title}</BoxTitle>
                      <BoxSubTitle>
                        {i.introduction.length > 19
                          ? `${i.introduction.substr(0, 20)}...`
                          : i.introduction}
                      </BoxSubTitle>
                    </BoxInfo>
                  </Box>
                );
              })}
            </BoxSection4>
          ) : (
            /* 5가 앞 */
            <BoxSection5>
              {booth?.map((i, v) => {
                return (
                  <Box
                    onClick={() => onClick(i.id, v + 1)}
                    key={i.id}
                    layoutId={i.id + ''}
                  >
                    <BoxImg
                      src={i.images[0] ? i.images[0]['storedFilePath'] : ExImg}
                    />
                    <BoxInfo>
                      <BoxInfoHeader>
                        <BoxInfoFirstItem>
                          <PinIcon icon={faLocationDot} />
                          <span>{i.location}</span>
                        </BoxInfoFirstItem>
                        <BoxInfoSecondItem>
                          <HeartIcon icon={faHeart} />
                          <span>{i.likeCnt}</span>
                        </BoxInfoSecondItem>
                      </BoxInfoHeader>
                      <BoxTitle>{i.title}</BoxTitle>
                      <BoxSubTitle>
                        {i.introduction.length > 19
                          ? `${i.introduction.substr(0, 20)}...`
                          : i.introduction}
                      </BoxSubTitle>
                    </BoxInfo>
                  </Box>
                );
              })}
            </BoxSection5>
          )}
        </BoothSection>
      )}
      <Btn to="/booth">부스 전체보기</Btn>
    </Container>
  );
}

export default TopBoothSection;
