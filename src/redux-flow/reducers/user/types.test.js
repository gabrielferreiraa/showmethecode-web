import { expect } from 'chai';

import types from './types';

describe('types/user', () => {
   test('should be a object', () => {
       expect(types).to.be.a('object');
   });

   test('should have 3 actions', () => {
       expect(Object.keys(types)).to.have.lengthOf(3);
   });

   describe('SYNC_REQUEST', () => {
       test('should have a property', () => {
           expect(types).to.have.property('SYNC_REQUEST');
       });

       test('property should return a string', () => {
           expect(types.SYNC_REQUEST).to.be.a('string');
       });

       test('property should return correct type', () => {
           expect(types.SYNC_REQUEST).to.be.equal('user/SYNC_REQUEST');
       });
   });

   describe('SYNC_SUCCESS', () => {
       test('should have a property', () => {
           expect(types).to.have.property('SYNC_SUCCESS');
       });

       test('property should return a string', () => {
           expect(types.SYNC_SUCCESS).to.be.a('string');
       });

       test('property should return correct type', () => {
           expect(types.SYNC_SUCCESS).to.be.equal('user/SYNC_SUCCESS');
       });
   });

    describe('SYNC_FAILURE', () => {
        test('should have a property', () => {
            expect(types).to.have.property('SYNC_FAILURE');
        });

        test('property should return a string', () => {
            expect(types.SYNC_FAILURE).to.be.a('string');
        });

        test('property should return correct type', () => {
            expect(types.SYNC_FAILURE).to.be.equal('user/SYNC_FAILURE');
        });
    });
});
