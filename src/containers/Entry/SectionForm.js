import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledSectionForm = styled.div`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;

  input {
    margin-right: 5px;
  }
`

export default function SectionForm({ titleComponent, form }) {
  return (
    <StyledSectionForm>
      {titleComponent}
      <form>
        <Wrapper>{form}</Wrapper>
      </form>
    </StyledSectionForm>
  )
}

SectionForm.propTypes = {
  titleComponent: PropTypes.node.isRequired,
  form: PropTypes.node.isRequired,
}
