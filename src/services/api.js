import httpClient from './http-client';

import { transformUserToSave } from "./transformers";

export const myRooms = userId => httpClient({
    method: 'GET',
    url: `/room/?userId=${userId}`,
});

export const upsertUser = user => httpClient({
    method: 'POST',
    url: '/user',
    data: transformUserToSave(user),
});
