import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import global from 'config/global';

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px dashed ${global.colors.secondaryColor};
`;

export default function Avatar({ src, alt }) {
    return <StyledAvatar src={src} alt={alt} loading="lazy" />
}

Avatar.defaultProps = {
    alt: '',
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};
