import React from 'react';
import styled from 'styled-components';

import { UpTitle } from '../../styles/style';

const Title = styled.h1`
  font-family: 'Gmarket Sans TTF';
  font-size: 100px;
  text-shadow: 1px 1px 0.2px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;

export default function About() {
  return (
    <div>
      <div className="about_title_image"></div>

      {/* <Title>About</Title>  */}
      <UpTitle title="About" />
      <div className="about_logo">
        <br></br>멋쟁이사자처럼 x 축제기획단
      </div>
      <div className="about_explain">
        {' '}
        <br></br>
        3년만에 돌아온 동국대학교 대동제를 위해 동국대학교 축제기획단이 힘껏
        열정을 쏟아 축제를 기획하고 학우 여러분들의 편의를 위해 동국대
        멋쟁이사자처럼이 축제 웹사이트를 개발하였습니다. 오랜만에 열리는 축제인
        만큼 학우 여러분들께서 즐겁고 행복한 축제가 되었으면 좋겠습니다! 학우
        여러분의 청춘을 응원합니다! :&#41;
      </div>
      <div className="about_elephant_image">이미지</div>
      <h3>[ 만든이들 ]</h3>

      {/* 멋사 */}
      <div className="about_title_image">멋사 로고</div>
      <div className="about_title2">동국대학교 멋쟁이사자처럼</div>
      <div className="about_title3">기획 디자인 팀</div>
      <div className="about_lion_card">카드 컴포넌트 넣기</div>
      <div className="about_title3">프론트 개발 팀</div>
      <div className="about_lion_card">카드 컴포넌트 넣기</div>
      <div className="about_title3">백엔드 개발 팀</div>
      <div className="about_lion_card">카드 컴포넌트 넣기</div>

      <br></br>
      {/* 축제기획단 */}
      <div className="about_title_image">렛츠기릿 로고</div>
      <div className="about_title2">동국대학교 축제기획단</div>
      <div className="about_title3">기획 팀</div>
      <div className="about_lion_card">카드 컴포넌트 넣기</div>

      <br></br>
    </div>
  );
}
