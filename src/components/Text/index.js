import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const sizes = {
  small: '1em',
  medium: '1.3em',
  large: '1.6em',
};

const StyledText = styled.p`
  color: #333;
  font-size: ${({ size }) => sizes[size]};
  text-align: ${({ align }) => align};
`;

export default function Text({ size, align, ...props }) {
    return <StyledText size={size} align={align} {...props} />
}

Text.defaultProps = {
    size: sizes.small,
    align: 'left',
};

Text.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
};
