import React from "react"

import { Button, Input } from "components"

export default function CreateRoomForm() {
  return (
    <>
      <Input
        label="Language"
        name="language"
        id="language"
        value=""
        onChange={() => {}}
      />
      <Button onClick={() => {}}>create</Button>
    </>
  )
}
