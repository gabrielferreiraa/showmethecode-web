import { createGlobalStyle } from "styled-components"

import global from "config/global"
import fontFace from "./fonts"

export default createGlobalStyle`
  ${fontFace}

  body {
    font-size: 14px;
    font-family: ${global.font.regular}, sans-serif;
  }
`
