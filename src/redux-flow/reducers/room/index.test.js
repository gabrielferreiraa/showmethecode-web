import { expect } from 'chai';

import roomReducer, { initialState } from './index';
import types from './types';

const myRooms = [];

describe('reducers/room', () => {
    test('should be a function ', () => {
        expect(roomReducer).to.be.a('function');
    });

    test('should return a initial state', () => {
        const result = roomReducer(undefined, { type: 'unknown' });

        expect(result).to.be.deep.equal(initialState);
    });

    test('should can handle myRooms/FETCH_REQUEST', () => {
        const result = roomReducer(undefined, {
            type: types.REQUEST,
            payload: { isFetching: true },
        });

        expect(result).to.be.deep.equal({
            ...initialState,
            isFetching: true,
        });
    });

    test('should can handle myRooms/FETCH_SUCCESS', () => {
        const result = roomReducer(undefined, {
            type: types.SUCCESS,
            payload: {
                isFetching: false,
                myRooms,
            },
        });

        expect(result).to.be.deep.equal({
            ...initialState,
            isFetching: false,
            myRooms,
        });
    });

    test('should can handle myRooms/FETCH_FAILURE', () => {
        const result = roomReducer(undefined, {
            type: types.FAILURE,
            payload: {
                isFetching: false,
                error: [],
            },
        });

        expect(result).to.be.deep.equal({
            ...initialState,
            isFetching: false,
            error: [],
        });
    });
});
