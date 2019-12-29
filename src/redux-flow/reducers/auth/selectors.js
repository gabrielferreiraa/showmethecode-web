import { createSelector } from "reselect"

const getUser = ({ user }) => user.data

export const getAuthenticatedUser = createSelector(
  getUser,
  ({ name, email, avatar }) => ({
    name,
    avatar,
    email,
  })
)
