import React from 'react';
import styled from 'styled-components';

import global from 'config/global';

const Guest = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transform: translateX(${({ countSpace }) => countSpace * 10}px);
  border: 1px dashed ${global.colors.darkColor};
`;

const List = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row-reverse;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
`;

export default function Guests({ data }) {
    return data.length > 0 && (
        <List>
            {data.map((guest, index) => (
                <Item title={`${guest.name} (guest)`} key={guest._id + index}>
                    <Guest src={guest.avatar} countSpace={index} />
                </Item>
            ))}
        </List>
    );
}
