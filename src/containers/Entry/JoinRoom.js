import React from "react"

import { Button, Input } from "components"
import RoomSectionTitle from "./RoomSectionTitle"

const JoinRoomTitle = () => (
  <RoomSectionTitle
    title="Join a room"
    tooltip="Enter your friend's room number here to enter the same room"
  />
)

export default function JoinRoom() {
  return (
    <div>
      <JoinRoomTitle />
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
