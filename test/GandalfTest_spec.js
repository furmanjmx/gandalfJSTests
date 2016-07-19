var frisby = require('../lib/frisby');

var user = 'admin';
var password = 'vqj66myg6xfp';
var url = 'http://ec2-52-18-105-188.eu-west-1.compute.amazonaws.com';

frisby.create('Positive')
    .post(url + '/api/v1/tables/56cde35ff7046652308b4572/decisions')
    .auth(user, password)
    .expectStatus(422)
    .expectHeaderContains('content-type', 'application/json')
    .toss();

frisby.create('Negative')
    .post(url + '/api/v1/tables/56cde35ff7046652308b4572/decisions')
    .expectStatus(401)
    .toss();