import styled from 'styled-components';
import maple from '../assets/img/maple.png';

const TitleContainer = styled.section`
  position: relative;
  width: 100%;
`;

const TitleStyle = styled.h1`
  font-weight: 800;
  font-size: 28px;
  line-height: 32.2px;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 0.2px rgba(0, 0, 0, 0.25);
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  bottom: 10px;
  left: 90px;
`;

export function UpTitle({ title }) {
  return (
    <TitleContainer>
      <Img src={maple} />
      <TitleStyle>{title}</TitleStyle>
    </TitleContainer>
  );
}
