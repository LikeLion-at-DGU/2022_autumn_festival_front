import styled from 'styled-components';
import TitleImg from '../../assets/img/mainFooterT.png';
import LogoImg from '../../assets/img/mainFooter.png';
import MImg from '../../assets/img/mainFooterM.png';
import { Link } from 'react-router-dom';

const Container = styled.section`
  border: 1px solid white;
  width: auto;
  height: 73vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: auto;
  height: 90px;
  margin-right: 10px;
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
  font-size: 20px;
  margin-bottom: 30px;
`;

const LogoI = styled.img`
  width: auto;
  height: 70px;
  margin-right: 10px;
  margin-bottom: 30px;
`;

const MeImg = styled.img`
  width: auto;
  height: 50px;
  margin-right: 7px;
  margin-bottom: 50px;
`;

function NoticeMadeSection() {
  return (
    <Container>
      <Img src={TitleImg} />
      <LogoI src={LogoImg} />
      <MeImg src={MImg} />
      <Btn to="/about">더 알아보기</Btn>
    </Container>
  );
}
export default NoticeMadeSection;
