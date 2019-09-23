import React from 'react';
import PropTypes from 'prop-types';
import * as logo from 'styled-icons/boxicons-logos';
import * as icons from 'styled-icons/boxicons-regular';

const Icon = ({ icon, size, title, isLogo }) => {
    const IconComponent = isLogo
        ? logo[icon]
        : icons[icon];

    return (
        <IconComponent size={size} title={title} />
    )
};

Icon.defaultProps = {
    size: 30,
    title: '',
    isLogo: false,
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    title: PropTypes.string,
    isLogo: PropTypes.bool,
};

export default Icon;
