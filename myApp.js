let express = require('express');
let app = express();
require('dotenv').config();
console.log(process.env.MESSAGE_STYLE)

// now you can do: mysite.com/public/style.css
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  let absolutePath = __dirname + '/views/index.html';
  // also: res.send();
  res.sendFile(absolutePath);
});

// sending a json object
app.get('/json', function(req, res) {
  const helloJSON = 'Hello json';
  let message;

  // use environment variable
  const mySecret = process.env['MESSAGE_STYLE'];

  if (mySecret === 'uppercase') {
    message = helloJSON.toUpperCase();
  } else {
    message = helloJSON;
  }

  const data = {
    "message": message
  };
  res.json(data);
});

































 module.exports = app;
