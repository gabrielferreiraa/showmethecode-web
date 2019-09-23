import { expect } from 'chai';

import authReducer, { initialState } from './index';

describe('reducers/auth', () => {
    test('should be a function ', () => {
        expect(authReducer).to.be.a('function');
    });

    test('should return a initial state', () => {
        const result = authReducer(undefined, { type: 'unknown' });

        expect(result).to.be.deep.equal(initialState);
    });

    test('should can handle auth/REQUEST', () => {
        const result = authReducer(undefined, {
            type: 'auth/REQUEST',
            payload: { isFetching: true },
        });

        expect(result).to.be.deep.equal({
            ...initialState,
            isFetching: true,
        });
    });

    test('should can handle auth/SUCCESS', () => {
        const result = authReducer(undefined, {
            type: 'auth/SUCCESS',
            payload: {
                isFetching: false,
            },
        });

        expect(result).to.be.deep.equal({
            ...initialState,
            isFetching: false,
        });
    });

    test('should can handle auth/FAILURE', () => {
        const result = authReducer(undefined, {
            type: 'auth/FAILURE',
            payload: {
                isFetching: false,
                user: null,
            },
        });

        expect(result).to.be.deep.equal({
            ...initialState,
            isFetching: false,
        });
    });
});
