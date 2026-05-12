import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/pretendard/Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/pretendard/Pretendard-Medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/pretendard/Pretendard-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/pretendard/Pretendard-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
  
@font-face {
  font-family: 'DNFBitBitv2';
  src: url('/fonts/DNFBitBitv2/DNFBitBitv2.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0; /* 원하는 배경색 */
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* 가로 스크롤 방지 */
    font-family: 'Pretendard Variable', sans-serif;
  font-family: 'DNFBitBitv2', sans-serif;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
