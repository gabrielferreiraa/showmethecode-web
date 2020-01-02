import { createSelector } from "reselect"
import { getUser } from "redux-flow/reducers/user/selectors"
import { USER_TYPE } from "./constants"

export const getMyRooms = ({ room }) => room.myRooms

export const getAllMyRooms = createSelector(
  [getUser, getMyRooms],
  ({ _id }, myRooms) =>
    myRooms.map(({ users, owner, code, createdAt }) => ({
      userType: owner._id === _id ? USER_TYPE.owner : USER_TYPE.guest,
      users,
      owner,
      code,
      createdAt,
    }))
)
