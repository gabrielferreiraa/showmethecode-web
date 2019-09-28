import styled from 'styled-components';
import PropTypes from 'prop-types';

const sizes = {
  small: '1em',
  medium: '1.3em',
  large: '1.6em',
};

const Text = styled.p`
  color: #333;
  font-size: ${({ size }) => sizes[size]};
  text-align: ${({ align }) => align};
`;

Text.defaultProps = {
    size: sizes.small,
    align: 'left',
};

Text.propTypes = {
    size: PropTypes.oneOf(Object.keys(sizes)),
    align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Text;
