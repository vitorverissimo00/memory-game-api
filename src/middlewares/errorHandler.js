const process = require("process");

const errorHandler = (err, port) => {
  if (err.syscall !== "listen") {
    throw err;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  switch (err.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw err;
  }
};

module.exports = errorHandler;
