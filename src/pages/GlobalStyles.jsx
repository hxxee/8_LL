import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
	font-family: 'Pretendard Variable';
	font-weight: 45 920;
	font-style: normal;
	font-display: swap;
	src: url('./woff2/PretendardVariable.woff2') format('woff2-variations');
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
