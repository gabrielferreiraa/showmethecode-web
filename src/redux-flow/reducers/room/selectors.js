import { createSelector } from 'reselect';
import { USER_TYPE } from "./constants";
import { getUser } from 'redux-flow/reducers/user/selectors';

export const getMyRooms = ({ room }) => room.myRooms;

export const getAllMyRooms = createSelector(
    [getUser, getMyRooms], ({ _id }, myRooms) => {
        return myRooms.map(({ users, owner, code, createdAt }) => {
           return {
               userType: owner._id === _id ? USER_TYPE.owner : USER_TYPE.guest,
               users,
               owner,
               code,
               createdAt,
           };
        });
    }
);
