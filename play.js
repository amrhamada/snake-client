const connection = require('./client');
console.log('Connecting ...');
const conn = connection();
conn.setEncoding('utf8');
const setupInput = require('./input');



stdin = setupInput(conn);