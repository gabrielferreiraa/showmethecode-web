import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import global from "config/global"

const GuestAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transform: translateX(${({ countSpace }) => countSpace * 10}px);
  border: 1px dashed ${global.colors.darkColor};
  object-fit: cover;
`

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row-reverse;
`

const Item = styled.li`
  display: flex;
  align-items: center;
`

export default function Guests({ data }) {
  return (
    data.length > 0 && (
      <List>
        {data.map((guest, index) => (
          <Item title={`${guest.name} (guest)`} key={`guest-${guest._id}`}>
            <GuestAvatar src={guest.avatar} countSpace={index} />
          </Item>
        ))}
      </List>
    )
  )
}

Guests.defaultProps = {
  data: [],
}

Guests.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ),
}
