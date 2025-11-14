const request = require('supertest');
const { expect } = require('chai');
const app = require('./app'); // Import your express app

describe('GET /', () => {
  it('should respond with a status code of 200', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done(); // Signal that the test is complete
      });
  });
});
