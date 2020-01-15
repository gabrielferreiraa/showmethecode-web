import React from "react"
import styled from "styled-components"

import global from "config/global"
import { Button, Title, Input, Tooltip, Icon } from "components"

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

export default function JoinRoom() {
  return (
    <div>
      <TitleWithIcon>
        <Title>Join a room</Title>
        <Tooltip content="Enter your friend's room number here to enter the same room">
          <Icon icon="InfoCircle" />
        </Tooltip>
      </TitleWithIcon>
      <div>
        <Input
          label="Room code"
          id="room_code"
          name="room_code"
          value=""
          onChange={() => {}}
        />
        <Button onClick={() => {}}>enter</Button>
      </div>
    </div>
  )
}
