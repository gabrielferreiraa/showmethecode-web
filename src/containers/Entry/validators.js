export const createRoomFormValidator = values => {
  const errors = {}
  if (!values.language) errors.language = "Language is required"

  return errors
}

export const joinRoomFormValidator = values => {
  const errors = {}
  if (!values.code) errors.code = "Room code is required"

  return errors
}
