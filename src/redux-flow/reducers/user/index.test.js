import { expect } from 'chai';

import userReducer, { initialState } from './index';

describe('reducers/user', () => {
    test('should be a function ', () => {
        expect(userReducer).to.be.a('function');
    });

    test('should return a initial state', () => {
        const result = userReducer(undefined, { type: 'unknown' });

        expect(result).to.be.deep.equal(initialState);
    });

    test('should can handle user/SYNC_REQUEST', () => {
        const result = userReducer(undefined, {
            type: 'user/SYNC_REQUEST',
            payload: { isFetching: true },
        });

        expect(result).to.be.deep.equal({
            ...initialState,
            isFetching: true,
        });
    });

    test('should can handle user/SYNC_SUCCESS', () => {
        const result = userReducer(undefined, {
            type: 'user/SYNC_SUCCESS',
            payload: {
                isFetching: false,
                data: [],
            },
        });

        expect(result).to.be.deep.equal({
            ...initialState,
            isFetching: false,
            data: [],
        });
    });

    test('should can handle user/SYNC_FAILURE', () => {
        const result = userReducer(undefined, {
            type: 'user/SYNC_FAILURE',
            payload: {
                isFetching: false,
                error: null,
            },
        });

        expect(result).to.be.deep.equal({
            ...initialState,
            isFetching: false,
            error: null,
        });
    });
});
