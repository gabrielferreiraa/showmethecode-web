import React from "react"
import RoomSectionTitle from "./RoomSectionTitle"

export const JoinRoom = () => (
  <RoomSectionTitle
    title="Join a room"
    tooltip="Enter your friend's room number here to enter the same room"
  />
)

export const CreateRoom = () => (
  <RoomSectionTitle
    title="Create your room"
    tooltip="Create your room and share the room code with your friends"
  />
)

export const YourRooms = () => (
  <RoomSectionTitle
    title="Your rooms"
    tooltip="Rooms you created or joined"
    side="right"
  />
)
