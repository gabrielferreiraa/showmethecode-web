import { expect } from 'chai';

import { getAuthenticatedUser } from "./selectors";

const state = {
    user: {
        data: {
            name: 'Silvio Santos',
            email: ' silvio@email.com',
            avatar: 'http://sbt.com.br/photo.png',
        }
    }
};

describe('selectors/auth', () => {
   describe('getAuthenticatedUser', () => {
       test('should be a function', () => {
           expect(getAuthenticatedUser).to.be.a('function');
       });

       test('should be return object', () => {
           expect(getAuthenticatedUser(state)).to.be.a('object');
       });

       test('should be return correct object', () => {
           expect(getAuthenticatedUser(state)).to.be.deep.equal({
               name: state.user.data.name,
               email: state.user.data.email,
               avatar: state.user.data.avatar,
           });
       });
   });
});
