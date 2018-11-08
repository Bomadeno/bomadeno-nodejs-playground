const { spawn } = require('child_process');
const request = require('request');
const test = require('tape');

const port = process.env.PORT || 5000;
const child = spawn('node', ['app.js']);
test('responds to requests', (t) => {
  t.plan(3);
  request(`http://127.0.0.1:${port}`, { timeout: 1500 }, (error, response, body) => {
    t.false(error);
    t.equal(response.statusCode, 200);
    t.notEqual(body.indexOf('Express is working.'), -1);
  });
});

test.onFinish(() => { child.kill(); });
