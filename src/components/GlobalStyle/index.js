import { createGlobalStyle } from 'styled-components';

import fontFace from './fonts';
import global from 'config/global';

export default createGlobalStyle`
  ${fontFace}

  body {
    font-size: 14px;
    font-family: ${global.font.regular}, sans-serif;
  }
`;
