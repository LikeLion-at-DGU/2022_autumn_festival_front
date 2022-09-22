import styled, { css } from 'styled-components';

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
