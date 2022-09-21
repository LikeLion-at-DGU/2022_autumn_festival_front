import React from 'react';
import styled from 'styled-components';
import dguLogo from '../../assets/img/dguLogo.png';
import aboutFLogo from '../../assets/img/aboutFLogo.png';
import aboutC from '../../assets/img/aboutC.png';
import aboutFace from '../../assets/img/aboutFace.png';
import LogoImg from '../../assets/img/maple.png';

import { UpTitle } from '../../styles/style';

const TitleContainer = styled.section`
  position: relative;
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  bottom: 10px;
  left: 87px;
`;
const Title = styled.h1`
  font-weight: 800;
  font-size: 28px;
  line-height: 32.2px;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 0.2px rgba(0, 0, 0, 0.25);
`;

const LogoImage = styled.img`
  width: 78px;
  filter: drop-shadow(-4px 4px 15px rgba(255, 255, 255, 0.4));
`;
const Logo = styled.h4`
  text-align: center;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 13px;
  letter-spacing: 0.1em;

  float: left;
  width: 45%;
`;

const Xtext = styled.h2`
  font-size: 30px;
  float: left;
  width: 10%;
`;
const IntroText = styled.p`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.1em;

  margin: 20px;
`;

const CImage = styled.img`
  width: 119px;
`;

const SubTitle = styled.h3`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;
const SubText = styled.h4`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 9px;
`;
const Line = styled.hr`
  border: 1px dashed rgba(255, 255, 255, 0.5);
  box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.5);
  transform: rotate(-0.29deg);
`;

const TeamText = styled.h4`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;

const Card = styled.div`
  background: linear-gradient(
    180deg,
    rgba(208, 208, 208, 0.5) 0%,
    rgba(208, 208, 208, 0.24) 100%
  );
  border-radius: 10px;
  width: 42%;
  padding: 10px;
  margin: 5px;

  float: left;
`;
const FaceImg = styled.img`
  width: 40%;
`;
const CardName = styled.h3`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 2px;
`;
const CardMajor = styled.h3`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 7px;
  text-align: center;

  color: #fd9903;
`;
const CardRole = styled.h3`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 1px;
  text-align: center;
`;

const CardLine = styled.hr`
  border: 0.5px solid #ffffff;
`;
const CardText = styled.h4`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 200;
  font-size: 5px;
  line-height: 13px;
  text-align: left;
`;
const Space = styled.div`
  width: 100%;
`;

export default function About() {
  return (
    <div style={{ marginTop: '97rem' }}>
      <TitleContainer>
        <Img src={LogoImg} />
        <Title>ABOUT</Title>{' '}
      </TitleContainer>

      <Logo>
        <LogoImage src={dguLogo} />
        <br></br>동국대학교 <br></br>멋쟁이사자처럼
      </Logo>
      <Xtext>X</Xtext>
      <Logo>
        <LogoImage src={aboutFLogo} />
        <br></br>동국대학교 <br></br> 축제기획단
      </Logo>

      <IntroText>
        3년만에 돌아온 동국대학교 대동제를 위해<br></br>
        동국대학교 축제기획단이 힘껏 열정을 쏟아 축제를 기획하고<br></br>
        학우 여러분들의 편의를 위해 동국대 멋쟁이사자처럼이 축제 웹사이트를
        개발하였습니다.<br></br>
        <br></br>
        오랜만에 열리는 축제인 만큼 학우 여러분들께서<br></br>
        즐겁고 행복한 축제가 되었으면 좋겠습니다!<br></br>
        학우 여러분의 청춘을 응원합니다! :&#41;
      </IntroText>

      <CImage src={aboutC} />

      <SubTitle>
        <br></br>
        <br></br>[ 만든이들 ]
      </SubTitle>
      <br></br>
      <br></br>
      <LogoImage src={dguLogo} />
      <SubText>동국대 멋쟁이사자처럼 10기</SubText>

      <Line />
      {/* 기획 */}
      <TeamText>기획 디자인 팀</TeamText>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>기획팀장</CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>{' '}
        </CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>{' '}
        </CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>{' '}
        </CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>

      {/* 프론트 */}
      <TeamText> .</TeamText>
      <TeamText>
        <br></br>
        <br></br>프론트 개발 팀
      </TeamText>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>기획팀장</CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>{' '}
        </CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>{' '}
        </CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>{' '}
        </CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>

      {/* 백 */}
      <TeamText>.</TeamText>
      <TeamText>
        <br></br>
        <br></br>백엔드 개발 팀
      </TeamText>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>기획팀장</CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>{' '}
        </CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>{' '}
        </CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
      <Card>
        <FaceImg src={aboutFace} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>{' '}
        </CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
    </div>
  );
}
