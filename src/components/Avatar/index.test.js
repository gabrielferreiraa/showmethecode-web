import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';
import { getByAltText } from '@testing-library/dom'
import Avatar from './index';

describe('<Avatar />', () => {
    test('should render', () => {
        render(<Avatar src="image-src" alt="Foto do Avatar" />);

        expect(getByAltText(document.body, /Foto do Avatar/)).toBeTruthy();
    });
});
