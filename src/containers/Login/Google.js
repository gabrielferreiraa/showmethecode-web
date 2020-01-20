import styled from "styled-components"
import { darken } from "polished"

import { Button } from "components"
import global from "config/global"

export default styled(Button)`
  background-color: ${global.colors.google};
  border-color: ${global.colors.google};
  color: #ffffff;

  &:hover {
    background-color: ${darken(0.05, global.colors.google)};
  }
`
