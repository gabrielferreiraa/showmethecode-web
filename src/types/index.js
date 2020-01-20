import { arrayOf, shape, string, func } from "prop-types"

export const formType = {
  value: string,
  name: string.isRequired,
  id: string.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
}

export const roomType = shape({
  code: string.isRequired,
  owner: shape({
    name: string.isRequired,
    email: string.isRequired,
    avatar: string.isRequired,
  }),
})

export const roomsType = arrayOf(roomType)
