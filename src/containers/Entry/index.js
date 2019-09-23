import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from 'components';
import { fetchMyRoomsRequest } from "redux-flow/reducers/room/actions";
import { getAuthenticatedUser } from "redux-flow/reducers/auth/selectors";

import { getAllMyRooms } from "redux-flow/reducers/room/selectors";

import Welcome from './Welcome';
import MyRooms from "./MyRooms";
import CreateRoom from "./CreateRoom";
import EnterRoom from "./EnterRoom";

export default function Entry () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMyRoomsRequest());
    }, [dispatch]);

    const { user, myRooms } = useSelector(state => ({
        user: getAuthenticatedUser(state),
        myRooms: getAllMyRooms(state),
    }));

    return (
        <>
            <div>
                <Avatar src={user.avatar} alt={user.name} />
                <Welcome>Hi, {user.name}</Welcome>
            </div>
            <div>
                <MyRooms rooms={myRooms} />
                <div>
                    <EnterRoom />
                    <CreateRoom />
                </div>
            </div>
        </>
    )
};
