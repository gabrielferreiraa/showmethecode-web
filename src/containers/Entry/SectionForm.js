import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledSectionForm = styled.div`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`

export default function SectionForm({ titleComponent, form }) {
  return (
    <StyledSectionForm>
      {titleComponent}
      <div>{form}</div>
    </StyledSectionForm>
  )
}

SectionForm.propTypes = {
  titleComponent: PropTypes.node.isRequired,
  form: PropTypes.node.isRequired,
}
