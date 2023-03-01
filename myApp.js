let express = require('express');
let app = express();
console.log('Hello World')

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  let absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

app.get('/json', function(req, res) {
  const data = {
    "message": "Hello json"
  };
  res.json(data);
});

































 module.exports = app;
