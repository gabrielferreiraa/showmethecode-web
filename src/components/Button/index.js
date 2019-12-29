import React from "react"
import styled from "styled-components"
import { darken } from "polished"
import PropTypes from "prop-types"

import global from "config/global"

const StyledButton = styled.button`
  background-color: ${global.colors.primaryColor};
  border-radius: ${global.layout.borderRadius};
  color: #fff;
  outline: none;
  border: 1px solid ${global.colors.primaryColor};
  cursor: pointer;
  padding: 15px 30px;
  transition: background-color 200ms ease;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  &:hover {
    background-color: ${darken(0.05, global.colors.primaryColor)};
  }
`

export default function Button({ children, onClick, ...rest }) {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}
