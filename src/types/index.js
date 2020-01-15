import { arrayOf, shape, string } from "prop-types"

export const roomType = shape({
  code: string.isRequired,
  owner: shape({
    name: string.isRequired,
    email: string.isRequired,
    avatar: string.isRequired,
  }),
})

export const roomsType = arrayOf(roomType)
