import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { Icon, Guests } from "components"
import global from "config/global"
import { roomsType } from "types"

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Item = styled.li`
  margin-bottom: 20px;
`

const Room = styled.div`
  padding: 15px;
  background-color: #ece9e9;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RoomCode = styled.h3`
  color: ${global.colors.darkColor};
  font-family: ${global.font.bold};
  margin: 0;
  font-size: 1.5em;
`

const Owner = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8em;
  color: ${global.colors.secondaryColor};
`

const EntryLink = styled(Link)`
  color: ${global.colors.primaryColor};
  margin-left: 10px;
`

const WrapperGuestsEntry = styled.div`
  display: flex;
  align-items: center;
`

const RoomCodeText = styled.p`
  margin: 0;
  color: ${global.colors.darkColor};
`

export default function RoomsList({ rooms }) {
  return (
    <List>
      {rooms.map(room => (
        <Item key={room.code}>
          <Room>
            <div>
              <RoomCodeText>Room Code</RoomCodeText>
              <RoomCode>{room.code}</RoomCode>
            </div>
            <WrapperGuestsEntry>
              <Guests data={room.users} />
              <EntryLink to="/">
                <Icon icon="LogInCircle" title={`Enter room "${room.code}"`} />
              </EntryLink>
            </WrapperGuestsEntry>
          </Room>
          <Owner>{`owner: ${room.owner.name}`}</Owner>
        </Item>
      ))}
    </List>
  )
}

RoomsList.propTypes = {
  rooms: roomsType.isRequired,
}
