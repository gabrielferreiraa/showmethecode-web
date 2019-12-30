import types from "./types"

export const loginRequest = provider => ({
  type: types.REQUEST,
  payload: {
    isFetching: true,
  },
  meta: { provider },
})

export const loginSuccess = () => ({
  type: types.SUCCESS,
  payload: {
    isFetching: false,
  },
})

export const loginFailure = (error = null) => ({
  type: types.FAILURE,
  payload: {
    isFetching: false,
    error,
  },
})
