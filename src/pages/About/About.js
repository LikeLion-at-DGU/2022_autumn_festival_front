import React, { useEffect } from 'react';
import styled from 'styled-components';
import dguLogo from '../../assets/img/dguLogo.png';
import aboutFlogo from '../../assets/img/aboutFLogo.png';
import aboutC from '../../assets/img/aboutC.png';
import Leeyeowon from '../../assets/img/about_Lee yeowon.png';
import Leeyeowon2 from '../../assets/img/about_Lee yeowon2.png';
import LogoImg from '../../assets/img/maple.png';
import SeoYeonmi from '../../assets/img/about_Seo Yeon-mi .png';
import KimSooyoung from '../../assets/img/about_Kim Sooyoung.png';
import AhnSoeun from '../../assets/img/about_Ahn Soeun.png';
import SeoHeechan from '../../assets/img/about_Seo Heechan.png';
import ShinYejin from '../../assets/img/about_Shin Yejin.png';
import LeeSeulgi from '../../assets/img/about_Lee seulgi.png';
import LeeSangdon from '../../assets/img/about_Lee Sang-don.png';
import JeongMinju from '../../assets/img/about_Jeong Minju.png';
import AhnSeokhwan from '../../assets/img/about_Ahn Seokhwan.png';
import ParkSangJun from '../../assets/img/about_Park Sangjun.png';
import RawFish from '../../assets/img/about_rawfish.png';
import Seo from '../../assets/img/about_seo.png';
import { UpTitle } from '../../styles/style';
import { useLocation } from 'react-router-dom';

const TitleContainer = styled.span`
  display: inline-block;
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
  margin-bottom: 50px;
`;

const LogoImage = styled.img`
  width: 78px;
  filter: drop-shadow(-4px 4px 15px rgba(255, 255, 255, 0.4));
`;
const Logo = styled.h4`
  text-align: center;
  font-family: 'GmarketSansLight';
  font-style: normal;
  font-weight: 550;
  font-size: 9px;
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
  /* font-family: 'Gmarket Sans TTF'; */
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.1em;

  margin: 40px;
  margin-top: 80px;
`;

const CImage = styled.img`
  width: 119px;
`;

const SubTitle = styled.h3`
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 23px;
  margin-top: 80px;
  margin-bottom: 40px;
`;
const SubText = styled.h4`
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 9px;
  margin-bottom: 50px;
`;
const Line = styled.hr`
  border: 1px dashed rgba(255, 255, 255, 0.5);
  box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.5);
  transform: rotate(-0.29deg);
`;

const TeamText = styled.h4`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 30px;
`;

const Card = styled.a`
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
  text-decoration: none;
  color: white;
`;

const FaceImg = styled.img`
  width: 50%;
`;
const CardName = styled.h3`
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 2px;
`;
const CardMajor = styled.h3`
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 7px;
  text-align: center;
  color: #fd9903;
`;
const CardRole = styled.h3`
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-weight: 350;
  margin-bottom: 15px;
  font-size: 10px;
  line-height: 1px;
  text-align: center;
`;

const CardLine = styled.hr`
  border: 0.5px solid #ffffff;
`;
const CardText = styled.h4`
  font-family: 'GmarketSansLight';
  font-style: normal;
  font-weight: 200;
  font-size: 10px;
  line-height: 13px;
  text-align: left;
`;
const Space = styled.div`
  width: 100%;
  margin-bottom: 80px;
  color: #1b2f4e;
`;

const hr = {
  visibility: 'hidden',
};

const Reference = styled.p`
  /* font-family: 'Gmarket Sans TTF'; */
  font-family: 'GmarketSansLight';
  font-style: normal;
  font-size: 10px;
  color: #e6e6e6;
`;

export default function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <TitleContainer>
      <UpTitle title={'ABOUT'} />
      <Logo>
        <br></br>
        <LogoImage src={dguLogo} />
        <br></br>
        <br></br>동국대학교 <br></br>멋쟁이사자처럼
      </Logo>
      <Xtext>X</Xtext>
      <Logo>
        <LogoImage src={aboutFlogo} />
        <br></br>동국대학교 <br></br> 축제기획단
        <br></br>
        <br></br>
        <br></br>
      </Logo>
      <IntroText>
        3년만에 돌아온 동국대학교 백상대동제를 위해<br></br>
        동국대학교 축제기획단이 힘껏 열정을 쏟아 축제를 기획하고 학우 여러분들의
        편의를 위해 동국대 멋쟁이사자처럼이 축제 웹사이트를 개발하였습니다.
        <br></br>
        <br></br>
        오랜만에 열리는 축제인 만큼 학우 여러분들께서<br></br>
        즐겁고 행복한 축제가 되었으면 좋겠습니다!<br></br>
        학우 여러분의 청춘을 응원합니다! :&#41;
      </IntroText>
      <CImage src={aboutC} />
      <SubTitle></SubTitle>
      <LogoImage src={dguLogo} />
      <SubText>DGU likelion 10th</SubText>
      <Line />
      {/* 기획 */}
      <TeamText>Project Design</TeamText>
      <Card>
        <FaceImg src={Leeyeowon} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>기획팀장</CardRole>
        <CardLine />
        <CardText>
          - 메인페이지, 타임테이블 디자인 <br></br>- 2차 디자인 전반 수정
        </CardText>
      </Card>
      <Card>
        <FaceImg src={KimSooyoung} />
        <CardName>🦁김수영</CardName>
        <CardMajor>산업시스템공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>
        </CardRole>
        <CardLine />
        <CardText>
          - 내부 바, 공지사항, 공지사항 게시글 디자인<br></br>
        </CardText>
      </Card>
      <Card>
        <FaceImg src={SeoYeonmi} />
        <CardName>🦁서연미</CardName>
        <CardMajor>경영정보학과 19</CardMajor>
        <CardRole>
          {' '}
          <br></br>
        </CardRole>
        <CardLine />
        <CardText>- 부스, 부스 검색창, 부스 홈페이지 디자인</CardText>
      </Card>
      <Card>
        <FaceImg src={AhnSoeun} />
        <CardName>🦁안소은</CardName>
        <CardMajor>화공생물공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>
        </CardRole>
        <CardLine />
        <CardText>- 축제 부스, 주점, 푸드트럭, 이벤트 데이터 수집</CardText>
      </Card>

      <hr style={hr}></hr>
      {/* <br style={reference}></br> */}
      <Reference>
        부스 페이지의 디자인은 @likelion_ewha 에서 제작한 <br></br>
        이화여자대학교 2022 대동제 사이트를 참고하였습니다.
      </Reference>

      {/* 프론트 */}
      <Space> .</Space>
      <TeamText>Front-end</TeamText>
      <Card href="https://github.com/seochan99">
        <FaceImg src={Seo} />
        <CardName>🦁서희찬</CardName>
        <CardMajor>컴퓨터공학과 19</CardMajor>
        <CardRole>프론트 개발팀장</CardRole>
        <CardLine />
        <CardText>
          - 총괄
          <br />- 부스 홈, 검색페이지 구현
        </CardText>
      </Card>
      <Card href="https://github.com/shinyejin0212">
        <FaceImg src={ShinYejin} />
        <CardName>🦁신예진</CardName>
        <CardMajor>정보통신공학과 19</CardMajor>
        <CardRole>
          {' '}
          <br></br>
        </CardRole>
        <CardLine />
        <CardText>
          - Navbar, 사이드메뉴바, Footer <br></br>- 부스 방명록 구현 및 배포
        </CardText>
      </Card>
      <Card href="https://github.com/leeideal">
        <FaceImg src={LeeSangdon} />
        <CardName>🦁이상돈</CardName>
        <CardMajor>산업시스템공학과 19</CardMajor>
        <CardRole>
          {' '}
          <br></br>
        </CardRole>
        <CardLine />
        <CardText>
          - 메인페이지 <br></br>- 타임테이블 구현 <br></br>- 모션 구현
          <br></br>
        </CardText>
      </Card>
      <Card href="https://github.com/seulg2027">
        <FaceImg src={LeeSeulgi} />
        <CardName>🦁이슬기</CardName>
        <CardMajor>컴퓨터공학과 19</CardMajor>
        <CardRole>
          {' '}
          <br></br>
        </CardRole>
        <CardLine />
        <CardText>
          - 공지사항 페이지, 공지사항&부스 디테일 페이지, rest api 구현, 부스
          수정하기 페이지, 메인페이지 수정
        </CardText>
      </Card>
      <Card href="https://github.com/lywon725">
        <FaceImg src={Leeyeowon2} />
        <CardName>🦁이여원</CardName>
        <CardMajor>멀티미디어공학과 20</CardMajor>
        <CardRole>
          {' '}
          <br></br>
        </CardRole>
        <CardLine />
        <CardText>- About 페이지 구현 </CardText>
      </Card>
      <Space> .</Space>
      <Space> .</Space>
      <Space> .</Space>
      {/* 백 */}
      <TeamText>Back-end</TeamText>
      <Card href="https://github.com/rawfishthelgh">
        <FaceImg src={RawFish} />
        <CardName>🦁이건회</CardName>
        <CardMajor>영어통번역학과 16</CardMajor>
        <CardRole>백엔드 개발팀장</CardRole>
        <CardLine />
        <CardText>- 공지사항, 이미지 로직 구현</CardText>
      </Card>
      <Card href="https://github.com/tkdwns414">
        <FaceImg src={ParkSangJun} />
        <CardName>🦁박상준</CardName>
        <CardMajor>정보통신공학과 19</CardMajor>
        <CardRole>
          {' '}
          <br></br>
        </CardRole>
        <CardLine />
        <CardText> - API 설계, 좋아요, 메뉴 로직 구현</CardText>
      </Card>
      <Card href="https://github.com/seokhwan-an">
        <FaceImg src={AhnSeokhwan} />
        <CardName>🦁안석환</CardName>
        <CardMajor>산업시스템공학과 17</CardMajor>
        <CardRole>
          {' '}
          <br></br>
        </CardRole>
        <CardLine />
        <CardText> - 부스 로직 구현</CardText>
      </Card>
      <Card href="https://github.com/JoungMinJu">
        <FaceImg src={JeongMinju} />
        <CardName>🦁정민주</CardName>
        <CardMajor>산업시스템공학과 18</CardMajor>
        <CardRole>
          {' '}
          <br></br>
        </CardRole>
        <CardLine />
        <CardText>- 방명록 로직 구현 </CardText>
      </Card>
      <Space> .</Space>
    </TitleContainer>
  );
}
