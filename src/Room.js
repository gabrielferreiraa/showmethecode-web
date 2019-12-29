import React from "react"
import io from "socket.io-client"

const endpoint = "http://localhost:9000"

const socket = io(endpoint, {
  transports: ["websocket"],
})

const Room = props => {
  const { roomCode, authorId } = props.match.params
  React.useEffect(() => {
    socket.emit("joinRoom", {
      roomCode,
      authorId,
    })
  }, [roomCode, authorId])

  React.useEffect(() => {
    socket.on("newUserOnRoom", msg => {
      alert(msg)
    })
  }, [])

  return <h2>{props.match.params.roomCode}</h2>
}

export default Room
