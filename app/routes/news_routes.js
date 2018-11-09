module.exports = function newsRoutes(app, db) {
  app.get('/news/:id', (req, res) => {
    res.send(`I would now get entry #${req.params.id} by URI`);
  });

  app.get('/news', (req, res) => {
    res.send(`I would now get entry ${req.body.index} by query`);
  });

  app.delete('/news/:id', (req, res) => {
    res.statusCode = 403;
    res.send('Deleting not supported');
  });

  app.put('/news/:id', (req, res) => {
    res.statusCode = 403;
    res.send('Updating not supported');
  });

  app.post('/news', (req, res) => {
    // You'll create your note here.
    res.send(`Hello. You want to create ${req.body.index} in ${db}`);
  });
};
