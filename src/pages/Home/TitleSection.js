import styled from 'styled-components';
import TitleS from '../../assets/img/ta.png';
import School from '../../assets/img/mainSchool.png';
import MainBg from '../../assets/img/mainBg.jpeg';
import { Fireworks, useFireworks } from 'fireworks-js/dist/react';

const Container = styled.section`
  margin-top: -350px;
  width: auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -70px;
  margin-top: -170px;
`;

const TitleImg = styled.img`
  width: 200px;
  height: 220px;
`;

const TitleTime = styled.img`
  width: 240px;
  height: 26px;
  margin-left: 12px;
  margin-top: 10px;
`;

const TitleFooter = styled.span`
  font-family: 'GmarketSansLight';
  font-size: 15px;
  margin-left: 16px;
`;

const DGUImg = styled.img`
  width: 100%;
  height: 150px;
  position: absolute;
  bottom: 80px;
`;

const TitleArea = styled.div`
  font-weight: 900;
  font-size: 108px;
  font-family: 'TmonMonsori';
  margin-left: 12px;
  background-image: url(${MainBg});
  background-size: 320px;
  background-attachment: fixed;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  letter-spacing: 0.09em;
  line-height: 115px;
`;

function TitleSection() {
  const { setEnabled, setOptions, enabled, options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 600,
      },
      delay: {
        min: 40,
        max: 45,
      },
      rocketsPoint: 60,
      speed: 3,
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 90,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
      boundaries: {
        visible: false,
      },
    },
  });

  const style = {
    background: '#1B2F4E',
    marginTop: '-150px',
    window: 'auto',
    height: '340px',
  };

  return (
    <>
      <Fireworks enabled={enabled} options={options} style={style}></Fireworks>
      <Container>
        <Box>
          <TitleArea>
            <div>
              렛츠
              <br />
              끼릿
            </div>
          </TitleArea>

          <TitleTime src={TitleS} />
          <TitleFooter>동국대학교 가을 대동제</TitleFooter>
        </Box>
        <DGUImg src={School} />
      </Container>
    </>
  );
}
export default TitleSection;
