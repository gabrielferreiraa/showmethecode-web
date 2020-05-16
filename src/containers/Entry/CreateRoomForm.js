import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { withFormik } from "formik"

import { Button, Select } from "components"
import { createRoomFormValidator as validate } from "./validators"

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;

  select {
    margin-right: 5px;
  }
`

function CreateRoomForm(props) {
  const { values, handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Select
          label="Language"
          id="language"
          name="language"
          value={values.language}
          options={[
            { value: "js", label: "JavaScript" },
            { value: "php", label: "PHP" },
          ]}
          {...props}
        />
        <Button type="submit">create</Button>
      </Wrapper>
    </form>
  )
}

CreateRoomForm.propTypes = {
  values: PropTypes.shape({
    language: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default withFormik({
  mapPropsToValues: () => ({ language: "" }),
  validate,
  // handleSubmit: values => console.log(values),
})(CreateRoomForm)
