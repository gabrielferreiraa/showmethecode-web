import React from "react"

import { Button, Input } from "components"

export default function JoinRoomForm() {
  return (
    <>
      <Input
        label="Room code"
        id="room_code"
        name="room_code"
        value=""
        onChange={() => {}}
      />
      <Button onClick={() => {}}>enter</Button>
    </>
  )
}
