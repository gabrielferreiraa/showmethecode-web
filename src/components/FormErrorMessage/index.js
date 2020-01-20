import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import global from "config/global"
import Icon from "../Icon"

const Error = styled.div`
  position: absolute;
  font-size: 0.8em;
  margin-top: 3px;
  color: ${global.colors.danger};
  display: flex;
  align-items: center;

  span {
    margin-left: 3px;
  }
`

export default function FormErrorMessage({ message }) {
  return (
    <Error>
      <Icon icon="ErrorCircle" size={16} />
      <span>{message}</span>
    </Error>
  )
}

FormErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}
