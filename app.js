const path = require('path');
const http = require('http');
const express = require('express');
const { createTerminus } = require('@godaddy/terminus');

const port = process.env.PORT || 5000;
const app = express();

// Code taken from https://github.com/godaddy/terminus
function onSignal() {
  // eslint-disable-next-line
  console.log('server is starting cleanup');
  return Promise.all([
    // your clean logic, like closing database connections
  ]);
}

function onShutdown() {
  // eslint-disable-next-line
  console.log('cleanup finished, server is shutting down');
}

function healthCheck() {
  return Promise.resolve(
    // optionally include a resolve value to be included as
    // info in the healthcheck response
  );
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Express is working.');
});

const server = http.createServer(app);

const options = {
  // healthcheck options
  healthChecks: {
    '/healthcheck': healthCheck,
  },

  // cleanup options
  timeout: 1000,
  onSignal,
  onShutdown,
};

createTerminus(server, options);

app.listen(port);
