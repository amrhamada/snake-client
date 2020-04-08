const connection = require('./client');;
console.log('Connecting ...');
const conn = connection();
conn.setEncoding('utf8');

const setupInput = (callback) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => handleUserInput(data));
  return stdin;

};

const handleUserInput = (data) => {
  if(data === '\u0003') {
    process.exit();
  }
  
};

stdin = setupInput();