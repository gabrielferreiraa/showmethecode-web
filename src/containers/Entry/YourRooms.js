import React from "react"
import styled from "styled-components"

import global from "config/global"
import { Icon } from "components"
import { roomsType } from "types"
import RoomsList from "./RoomsList"
import { YourRooms as YourRoomsTitle } from "./Titles"

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
      <YourRoomsTitle />
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
