'use strict';

const supergoose = require('cf-supergoose');
const server = require('../index.js');
const mockRequest = supergoose.server(server);
// jest.spyOn(console, 'log').mockImplementation();

describe('Testing server', () => {
  // it('Should be able to GET categories', () => {
  //   return mockRequest.get('/')
  //     .then(results => {
  //       expect(results.body);
  //     });
  // });
});