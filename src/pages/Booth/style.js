import styled, { css } from 'styled-components';
import { baseColor } from '../../styles/GlobalStyle';
import mainMapIcon from '../../assets/img/mainMapIcon.png';

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
  cursor: pointer;
`;

export const BoothNotificationOpen = styled.div`
  display: flex;
  width: 100%;
  margin-top: 18px;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;

  & > .bar {
    display: flex;
    align-item: center;
    width: 100%;
    height: 28px;
    line-height: 30px;
    font-weight: 800;
    font-size: 13px;
  }
  & > .notice {
    width: 270px;
    font-weight: 200;
    font-size: 10px;
    text-align: left;
    margin: 2px 14px 13px 30px;
  }
`;

export const IntroContainer = styled.div`
  width: 100%;
  margin-top: 21px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > .introtitle {
    display: flex;
    height: 26px;
    align-item: center;
    margin: 7px 0 3px 0;
  }

  & > div > span {
    line-height: 30px;
    font-size: 16px;
    font-weight: 800;
  }

  & > span {
    // font-size: 12px;
    margin-right: auto;
    border-bottom: 0.3px solid #fff;
  }
`;

export const IntroLine = styled.p`
  width: 100%;
  height: 0;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.5);
  transform: rotate(-0.29deg);
  margin: 0;
`;

export const IntroContent = styled.div`
  width: 100%;
  margin-top: 19px;
  text-align: left;
  font-size: 12px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div {
    height: 21px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;
  }
`;

// 부스 디테일 수정하기 //
export const EditBtn = styled.button`
  width: 89px;
  height: 29px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: ${baseColor};
  color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 15px;
  line-height: 130%;
  font-weight: 700;
  border: none;
  margin-top: 5px;
`;

export const EditForm = styled.form`
  display: flex;
  justify-content: space-around;
  margin-top: 7px;

  & > input {
    width: 108px;
    font-size: 12px;
    font-weight: 300;
    height: 23px;
    background: rgba(217, 217, 217, 0.2);
    border-radius: 4px;
    border: none;
    padding-left: 10px;
    color: #fff;
  }

  & > a {
    width: 75px;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    text-decoration: none;
    line-height: 26px;
    color: #000;
  }
`;

export const MapLoacation = (key) => {
  switch (key) {
    case '만해광장':
      //오키
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '86px',
              bottom: '9rem',
            }}
          />
        </>
      );
      break;
    case '대운동장':
      // okay
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '240px',
              bottom: '10rem',
            }}
          />
        </>
      );
      break;
    case '팔정도':
      //오키
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              left: '10.7rem',
              bottom: '9.3rem',
            }}
          />
        </>
      );
      break;
    case '명진관':
      // 오키
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '181px',
              bottom: '10.7rem',
            }}
          />
        </>
      );
      break;
    case '원흥관':
      //오키
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '92.2px',
              bottom: '10.8rem',
            }}
          />
        </>
      );
      break;
    case '학생회관':
      //오키
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '53.7px',
              bottom: '11.2rem',
            }}
          />
        </>
      );
      break;
    case '학림관':
      //okay
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '66px',
              bottom: '6.7rem',
            }}
          />
        </>
      );
      break;
    case '다향관':
      //okay
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '136px',
              bottom: '8.5rem',
            }}
          />
        </>
      );
      break;
    case '법학관':
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '190px',
              bottom: '8.3rem',
            }}
          />
        </>
      );
      break;
    case '혜화관':
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '230px',
              bottom: '7.4rem',
            }}
          />
        </>
      );
      break;
    case '사회과학관':
      //okay
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '253px',
              bottom: '6.5rem',
            }}
          />
        </>
      );
      break;
    case '잉카페앞':
      // okday
      return (
        <>
          <img
            src={`${mainMapIcon}`}
            style={{
              position: 'absolute',
              width: '15%',
              right: '246px',
              bottom: '8.4rem',
            }}
          />
        </>
      );
      break;

    default:
      break;
  }
};
