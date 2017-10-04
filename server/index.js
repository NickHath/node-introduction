const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 3000,
      ctrl = require('./controllers/books_controller');

// parses body into json, puts on req.body!!!
app.use(bodyParser.json());
app.use(express.static( __dirname + "/../public/build"));

app.get(`/api/books`, ctrl.read);
app.post(`/api/books`, ctrl.create);
app.delete(`/api/books/:id`, ctrl.delete);
app.put(`/api/books/:id`, ctrl.update);

app.listen(port, () => console.log(`Server listening on port ${port}`))