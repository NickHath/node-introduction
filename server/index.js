const express = require('express'),
      bodyParser = require('body-parser'),
      port = 3000,
      app = express();

// parses body into json, puts on req.body!!!
app.use(bodyParser.json());


app.listen(port, () => console.log(`Server listening on port ${port}`))