let express = require('express');
let app = express();
require('dotenv').config({ path: require('find-config')('.env') });
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
  let helloJSON = 'Hello json';

  // use environment variable
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    helloJSON = helloJSON.toUpperCase();
  }

  const data = {
    "message": helloJSON
  };
  res.json(data);
});

































 module.exports = app;
