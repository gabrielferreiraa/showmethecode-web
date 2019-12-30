import { createSelector } from "reselect"

const getUser = ({ user }) => user.data

const getAuthenticatedUser = createSelector(
  getUser,
  ({ name, email, avatar }) => ({
    name,
    avatar,
    email,
  })
)

export { getAuthenticatedUser }
export default getAuthenticatedUser
