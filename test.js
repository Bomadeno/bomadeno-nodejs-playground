const { spawn } = require('child_process');
const request = require('request');
const test = require('tape');

const port = process.env.PORT || 5000;
const child = spawn('node', ['app.js']);
test('responds to requests', (t) => {
  t.plan(3);
  // Wait for the server to shout that it started
  child.stdout.on('data', () => {
    request(`http://127.0.0.1:${port}`, { timeout: 1500 }, (error, response, body) => {
      t.false(error);
      t.equal(response.statusCode, 200);
      t.notEqual(body.indexOf('Application is installed and running. (go to /index.html to get started)'), -1);
    });
  });
});

test.onFinish(() => { child.kill(); });
