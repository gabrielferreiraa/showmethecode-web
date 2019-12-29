import styled from "styled-components"
import { darken } from "polished"

import { Button } from "components"
import global from "config/global"

export default styled(Button)`
  background-color: #ffffff;
  border-color: ${global.colors.google};
  color: ${global.colors.google};

  &:hover {
    background-color: ${darken(0.05, global.colors.google)};
  }
`
