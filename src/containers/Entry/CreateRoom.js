import React from "react"

import { Button, Input } from "components"
import RoomSectionTitle from "./RoomSectionTitle"

export default function CreateRoom() {
  return (
    <div>
      <RoomSectionTitle
        title="Create your room"
        tooltip="Create your room and share the room code with your friends"
      />
      <div>
        <Input
          label="Language"
          name="language"
          id="language"
          value=""
          onChange={() => {}}
        />
        <Button onClick={() => {}}>create</Button>
      </div>
    </div>
  )
}
