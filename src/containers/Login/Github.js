import styled from "styled-components"
import { darken } from "polished"

import { Button } from "components"
import global from "config/global"

export default styled(Button)`
  background-color: ${global.colors.github};
  border-color: ${global.colors.github};

  &:hover {
    background-color: ${darken(0.05, global.colors.github)};
  }
`
