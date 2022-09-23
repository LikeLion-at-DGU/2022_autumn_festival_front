import styled, { css } from 'styled-components';
import { baseColor } from '../../styles/GlobalStyle';

export const SwiperContainer = styled.div`
  width: 370px;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 325px;
  margin: 0 auto;
  padding-top: 15px;
`;

export const TypeBtn = styled.button`
  display: inline-block;
  min-width: 44px;
  height: 22px;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-size: 15px;
  float: left;

  ${(props) => {
    if (props.tp === '주점') {
      return css`
        background-color: #ff6b6b;
      `;
    } else if (props.tp === '부스') {
      return css`
        background-color: #0b9908;
      `;
    } else if (props.tp === '푸드트럭') {
      return css`
        background-color: #2676ee;
      `;
    }
  }}
`;

export const BoothTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
  text-align: left;
  margin: 6px 0 2px 0;
`;

export const BoothIntro = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0;
`;

export const LikeCnt = styled.span`
  font-size: 15px;
  line-height: 36px;
`;

export const DateLocContainer = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  font-size: 16px;
`;

export const LocationMap = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  font-size: 16px;
  color: ${baseColor};

  & > img {
    width: 30px;
    margin: 0 auto;
  }
`;

export const BoothNotification = styled.div`
  display: flex;
  align-item: center;
  width: 100%;
  height: 28px;
  line-height: 30px;
  font-weight: 800;
  font-size: 13px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-top: 18px;
`;
