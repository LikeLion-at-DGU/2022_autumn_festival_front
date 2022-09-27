import styled, { css } from 'styled-components';
import { baseColor } from '../../styles/GlobalStyle';

export const CateContainer = styled.div`
  margin-top: 38px;
  width: 328px;
  padding: 0 auto;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
`;

export const CateBtnActive = styled.button`
  display: inline-block;
  min-width: 54px;
  height: 22px;
  font-size: 15px;
  background-color: ${baseColor};
  color: #fff;
  border: 1px solid ${baseColor};
  border-radius: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin: 0 2.8px;
  cursor: pointer;
`;

export const CateBtn = styled.button`
  display: inline-block;
  min-width: 54px;
  height: 22px;
  font-size: 15px;
  background-color: transparent;
  color: ${baseColor};
  border: 1px solid ${baseColor};
  border-radius: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin: 0 2.8px;
  cursor: pointer;
`;

export const NoticeCard = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    width: 300px;
    margin-left: 38px;
    cursor: pointer;
  }
`;

export const NoticeTitle = styled.div`
  text-align: left;
`;

export const NoticeWriter = styled.span`
  float: left;
  text-align: left;
  color: #b4b4b4;
  font-size: 12px;
  margin-right: 5px;
`;

export const NoticeDate = styled.span`
  float: left;
  text-align: left;
  color: #b4b4b4;
  font-size: 12px;
  margin-left: 8px;
`;

export const NoticeLine = styled.p`
  width: 320px;
  justify-content: center;
  border: 0.7px solid rgba(255, 255, 255, 0.35);
  margin: 11px auto;
`;

export const PageNum = styled.span`
  display: inline-block;
  width: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  ${(props) => {
    const active = props.active;
    if (active === 'y') {
      return css`
        color: ${baseColor};
      `;
    }
  }};
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 90px;
  margin-top: 18px;
  margin-bottom: 68px;
`;

export const NoticeDetailContainer = styled.div`
  display: flex;
  margin: 8px 0 0 28.8px;
  width: 325px;
  justify-content: space-between;
`;

export const NoticeDetailContent = styled.div`
  width: 325px;
  margin: 50px 0 0 28.8px;
  font-size: 13px;
  text-align: left;
`;
