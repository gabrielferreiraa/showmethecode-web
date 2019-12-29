import { handleActions } from "redux-actions"
import types from "./types"

export const initialState = {
  isFetching: false,
  myRooms: [],
}

export default handleActions(
  {
    [types.REQUEST]: (state, { payload: { isFetching } }) => ({
      ...state,
      isFetching,
    }),
    [types.SUCCESS]: (state, { payload: { isFetching, myRooms } }) => ({
      ...state,
      isFetching,
      myRooms,
    }),
    [types.FAILURE]: (state, { payload: { isFetching, error } }) => ({
      ...state,
      isFetching,
      error,
    }),
    UPDATED_MY_ROOMS: (state, { params: { room } }) => ({
      ...state,
      myRooms: [...state.myRooms, room],
    }),
  },
  initialState
)
