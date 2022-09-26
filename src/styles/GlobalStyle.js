import { createGlobalStyle } from 'styled-components';

export const pointColor = '#1B2F4E';
export const baseColor = '#FD9903';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    font-size: 0.9rem;
  }

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    background-color: ${pointColor};
    font-weight: 500;
    margin-top: 72px;
    margin-bottom: 60px;
  }

  canvas{
    height: 500px;
    width: 100%;
  }

  @media only screen and (min-width: 200px) { //375px 너무 작아서 수정했음
    .App {
      width: 375px;
      height: 100vh;
      font-family: 'GmarketSansMedium';
      color: #FFF;
      & > {
        float: left;
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .App {
      width: 375px;
      height: 100vh;
      font-family: 'GmarketSansMedium';
      color: #FFF;
      & > {
        float: left;
      }
    }
  }

  // 스와이퍼 //
  .swiper-pagination-bullet {
    background-color: #FFF;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: ${baseColor};
  }
`;
