import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import global from "config/global"
import { Title, Tooltip, Icon } from "components"

const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${Title} {
    margin-right: 10px;
  }

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: ${global.colors.darkColor};
  }
`

export default function RoomSectionTitle({ title, tooltip }) {
  return (
    <TitleWithIcon>
      <Title>{title}</Title>
      <Tooltip content={tooltip}>
        <Icon icon="InfoCircle" />
      </Tooltip>
    </TitleWithIcon>
  )
}

RoomSectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
}
