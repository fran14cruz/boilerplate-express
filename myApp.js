require('dotenv').config();

let express = require('express');
let app = express();
console.log('Hello World')

// now you can do: mysite.com/public/style.css
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  let absolutePath = __dirname + '/views/index.html';
  // also: res.send();
  res.sendFile(absolutePath);
});

// sending a json object
app.get('/json', function(req, res) {
  const data = {
    "message": "Hello json"
  };
  // user environment variable
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    data.message.toUpperCase();
  }
  res.json(data);
});

































 module.exports = app;
