let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => handleUserInput(data));
  connection = conn;
  return stdin;

};

const handleUserInput = (data) => {
  if(data === '\u0003') {
    process.exit();
  }else {
    switch(data){
      case 'w':
        connection.write("Move: up");
        break;
      case 'a':
        connection.write("Move: left");
        break;
      case 's':
        connection.write("Move: down");
        break;
      case 'd':
        connection.write("Move: right");
        break;
      case 'l':
        connection.write("Say: winner");
        break;
    }
  }
  
};

module.exports = setupInput;