const net = require('net');

const {IP, PORT, playerName} = require('./constants');
const connect = () => {
  
  const conn = net.createConnection({
  host: IP,                                   
  port: PORT
});
  // const conn = net.createConnection({
  //   host: '192.168.1.191',
  //   port: 50541
  // });
  conn.setEncoding('utf8');

  conn.on('data', data => {
    console.log(data);
  });

  conn.on('connect', () => console.log("Successfully connected to game server" ));
  conn.on('end', () => process.exit());

  conn.write(`Name: ${playerName}`);
  return conn;
};

module.exports = connect;