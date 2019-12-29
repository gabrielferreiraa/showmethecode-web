import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import global from "config/global"

const StyledInput = styled.input`
  padding: 0 15px;
  border: 2px solid #e3e3e3;
  border-radius: 5px;
  outline: none;
  font-size: 1.1em;
  height: 60px;
  font-family: ${global.font.bold};
`

const Label = styled.label`
  display: block;
  font-family: ${global.font.regular};
  font-weight: normal;
  color: ${global.colors.darkColor};
  margin-bottom: 3px;
`

export default function Input({ value, name, id, type, label, ...rest }) {
  return (
    <div>
      {!!label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput type={type} value={value} name={name} id={id} {...rest} />
    </div>
  )
}

Input.defaultProps = {
  value: "",
  type: "text",
  label: "",
}

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
