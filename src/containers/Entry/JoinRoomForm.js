import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { withFormik } from "formik"

import { Button, Input } from "components"
import { joinRoomFormValidator as validate } from "./validators"

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;

  input {
    margin-right: 5px;
  }
`

function JoinRoomForm(props) {
  const { values, handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Input
          label="Room code"
          id="code"
          name="code"
          value={values.code}
          {...props}
        />
        <Button type="submit">enter</Button>
      </Wrapper>
    </form>
  )
}

JoinRoomForm.propTypes = {
  values: PropTypes.shape({
    code: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default withFormik({
  mapPropsToValues: () => ({ code: "" }),
  validate,
  // handleSubmit: values => console.log(values),
})(JoinRoomForm)
