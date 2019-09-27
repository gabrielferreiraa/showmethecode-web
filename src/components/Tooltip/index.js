import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import global from 'config/global';

const Content = styled.div`
  font-family: ${global.font.regular};
`;

export default function Tooltip({ content, children }) {
    return (
        <Content data-tip={content}>
            {children}
        </Content>
    )
}

Tooltip.propTypes = {
    content: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};
