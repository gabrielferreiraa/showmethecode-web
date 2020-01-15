import React from "react"
import styled from "styled-components"

import global from "config/global"
import { Icon, Title, Tooltip } from "components"
import { roomsType } from "types"
import RoomsList from "./RoomsList"

const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

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

const WithoutRooms = styled.div`
  color: ${global.colors.secondaryColor};
  margin: 0;
  text-align: right;

  span {
    margin-right: 5px;
  }
`

export default function YourRooms({ rooms }) {
  return (
    <>
      <TitleWithIcon>
        <Title align="right">Your rooms</Title>
        <Tooltip content="Rooms you created or joined">
          <Icon icon="InfoCircle" />
        </Tooltip>
      </TitleWithIcon>
      {rooms.length > 0 ? (
        <RoomsList rooms={rooms} />
      ) : (
        <WithoutRooms>
          <span>You have not created and have not joined any rooms yet</span>
          <Icon icon="Sad" size={16} />
        </WithoutRooms>
      )}
    </>
  )
}

YourRooms.propTypes = {
  rooms: roomsType.isRequired,
}
