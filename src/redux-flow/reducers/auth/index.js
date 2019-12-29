import { handleActions } from "redux-actions"
import types from "./types"

export const initialState = {
  isFetching: false,
}

export default handleActions(
  {
    [types.REQUEST]: (state, { payload: { isFetching } }) => ({
      ...state,
      isFetching,
    }),
    [types.SUCCESS]: (state, { payload: { isFetching } }) => ({
      ...state,
      isFetching,
    }),
    [types.FAILURE]: (state, { payload: { isFetching } }) => ({
      ...state,
      isFetching,
    }),
  },
  initialState
)
