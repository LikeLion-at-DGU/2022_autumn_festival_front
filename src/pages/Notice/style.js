import styled from 'styled-components';
import { baseColor } from '../../styles/GlobalStyle';

export const CateBtnActive = styled.button`
  display: inline-block;
  width: 59px;
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
  width: 59px;
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
`;

export const NoticeBox = styled.div`
  display: flex;
  width: 300px;
  margin-left: 38px;
`;

export const NoticeTitle = styled.span`
  display: inline-block;
  float: left;
  text-align: left;
`;

export const NoticeWriter = styled.span`
  float: left;
  text-align: left;
  color: #b4b4b4;
  font-size: 12px;
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
