import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import global from "config/global"
import { formType } from "types"
import FormErrorMessage from "../FormErrorMessage"

const StyledSelect = styled.select`
  padding: 0 15px;
  border: 2px solid ${global.colors.tertiaryColor};
  border-radius: ${global.layout.borderRadius};
  outline: none;
  font-size: 1.1em;
  height: 50px;
  font-family: ${global.font.bold};
  box-sizing: border-box;
  color: ${global.colors.tertiaryColor};
  background-color: #fff;
  min-width: 200px;
  width: auto;
  appearance: none;
  position: relative;
`

const Label = styled.label`
  display: block;
  font-family: ${global.font.regular};
  font-weight: normal;
  color: ${global.colors.secondaryColor};
  margin-bottom: 3px;
`

export default function Select({
  value,
  name,
  id,
  type,
  label,
  handleChange,
  handleBlur,
  options,
  ...rest
}) {
  const hasError =
    rest.touched && rest.errors && rest.touched[name] && !!rest.errors[name]

  return (
    <div>
      {!!label && <Label htmlFor={id}>{label}</Label>}
      <StyledSelect
        name={name}
        id={id}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="">Choice the language</option>
        {options.length > 0 &&
          options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </StyledSelect>
      {hasError && <FormErrorMessage message={rest.errors[name]} />}
    </div>
  )
}

Select.defaultProps = {
  options: [],
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  ...formType,
}
