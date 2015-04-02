var request = require('supertest-as-promised');
var api = require('../app.js');
var host = process.env.API_TEST_HOST || api;

request = request(host);
var expect = require('chai').expect

describe('items collection [/api/nav.json]', function() {

	describe('GET  /api/nav.json', function() {
		it('GET all items', function(done) {
      request
        .get('/api/nav.json')
        .set('Accept', 'application/json')
        .send()
        .expect(200)
        .expect('Content-Type', /application\/json/)
      .then(function assertions(res) {
          var body = res.body;

          // There are items?
          expect(body).to.have.property('items');
          expect(body.items).to.be.an('array');
          
          var items = body.items;


          console.log("Basic test check");

          done();
      }, done);
    });
	});
});
