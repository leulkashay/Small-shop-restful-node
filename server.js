const http = require("http");
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env'})

const port = process.env.PORT || 9000;

const app = require('./app');

const server = http.createServer(app);

server.listen(port);
