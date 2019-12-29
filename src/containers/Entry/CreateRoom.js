import React from "react"
import styled from "styled-components"

import global from "config/global"
import { Button, Title, Input, Icon, Tooltip } from "components"

const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${Title} {
    margin-right: 10px;
  }

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: ${global.colors.darkColor};
  }
`

export default function EnterRoom() {
  return (
    <div>
      <TitleWithIcon>
        <Title>Create your room</Title>
        <Tooltip content="Create your room and share the room code with your friends">
          <Icon icon="InfoCircle" />
        </Tooltip>
      </TitleWithIcon>
      <div>
        <Input label="Language" />
        <Button onClick={() => {}}>create</Button>
      </div>
    </div>
  )
}
