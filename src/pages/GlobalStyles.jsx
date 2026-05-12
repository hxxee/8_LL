import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
  @font-face { font-family: 'Pretendard'; src: url('/fonts/pretendard/Pretendard-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; } 
  
  @font-face { font-family: 'Pretendard'; src: url('/fonts/pretendard/Pretendard-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; } 
  
  @font-face { font-family: 'Pretendard'; src: url('/fonts/pretendard/Pretendard-SemiBold.woff2') format('woff2'); font-weight: 600; font-display: swap; } 
  
  @font-face { font-family: 'Pretendard'; src: url('/fonts/pretendard/Pretendard-Bold.woff2') format('woff2'); font-weight: 700; font-display: swap; }
  
  @font-face {
	font-family: 'Pretendard Variable';
	font-weight: normal;
	font-style: normal;
	font-display: block;
	src: url('./fonts/pretendard/PretendardVariable.woff2') format('woff2-variations');
  }

  @font-face {
    font-family: 'DNFBitBitv2';
    font-style:normal;
    font-weight:400;
    src: url('/fonts/DNFBitBitv2/DNFBitBitv2.otf') format('opentype');
    font-display: block;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: 'Pretendard Variable', sans-serif;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
