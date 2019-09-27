import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import global from 'config/global';

const StyledText = styled.h2`
  font-family: ${global.font.regular};
  color: ${global.colors.darkColor};
  font-weight: normal;
  font-size: 1.4em;
  text-align: ${({ align }) => align};
`;

export default function Title({ align, ...props }) {
    return <StyledText align={align} {...props} />
}

Title.defaultProps = {
    align: 'left',
};

Title.propTypes = {
    align: PropTypes.oneOf(['left', 'right', 'center']),
};
