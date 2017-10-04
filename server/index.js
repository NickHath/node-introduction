const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 3000,
      ctrl = require('./controllers/books_controller');

// parses body into json, puts on req.body!!!
app.use(bodyParser.json());


app.get(`/api/getBooks`, ctrl.read);
app.post(`/api/addBook`, ctrl.create);
app.delete(`/api/`, ctrl.delete);
app.put(`/api/`, ctrl.update);




app.listen(port, () => console.log(`Server listening on port ${port}`))