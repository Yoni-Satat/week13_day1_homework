const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('client/public'));

app.use(require('./controllers/index.js'));
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log(`Films app listening on port ${ this.address().port }`);
});
