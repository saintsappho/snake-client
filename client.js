const net = require("net");

const connect = function () {
  // TODO when submitted change host to localhost
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  conn.on('connect', () => {
    console.log('U r snek now')
    conn.write("Name: WOB")
    // conn.write("Move: up")
  })
  conn.on('data', (data) => {
    console.log(`${data}\nExiting...` )
    process.exit();
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect}
