import styled from 'styled-components';

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
