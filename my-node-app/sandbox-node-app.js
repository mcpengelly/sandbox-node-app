var express = require('express');
var app = express();

app.set('title', "Test site");
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('This is the home page.');
});

app.get('/about', function (req, res) {
  res.type('text/plain');
  res.send("Page about me.");
});

app.use(function (req, res) {
  res.type('text/plain');
  res.status('404');
  res.send('404 - Not Found.');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status('500');
  res.send('500 - Server error.');
});


app.listen(app.get('port'), function () {
  console.log( 'express started on http://localhost:' + app.get('port') + '; Press Ctrl-C to terminate.');
});
