let express = require('express');
let app = express();
require('dotenv').config();
console.log(process.env.MESSAGE_STYLE)

// Root-Level Request Logger Middleware
app.use(function middleware(req, res, next) { // 'middleware' name is not required
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
  // note: if you go to /json, you should see 'GET /json - ::1' in the console
});

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

// Chain middleware to create a time server
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ time: req.time });
});

// Get route parameter input from the client
app.get('/:word/echo', function(req, res) {
  //const { word } = req.params;
  res.json({ echo: req.params.word });
});
































 module.exports = app;
