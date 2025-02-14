"use-strict";

const http = require("http");
const debug = require("debug")("nodejs:server");
const process = require("process");
const dotenv = require("dotenv");
const app = require("../src/app");
const cors = require("cors");

dotenv.config();

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

const { normalizePort } = require("../src/config/app");
const errorHandler = require("../src/middlewares/errorHandler");
app.use(cors());

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);

// Init server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Server events
server.on("error", (err) => errorHandler(err, port));
server.on("listening", onListening);
