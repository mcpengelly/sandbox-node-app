var express = require('express');
var app = express();
var tip = require('./lib/tip.js');

app.set('title', "Test site");
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	next();
});

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  res.render('about', { tip: tip.getRandomTip() });
});

app.get('/tours/hood-river', function(req, res) {
  res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function(req, res) {
  res.render('tours/request-group-rate');
});

app.use(function (req, res) {
  res.status('404');
  res.render('404');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status('500');
  res.render('500');
});


app.listen(app.get('port'), function () {
  console.log( 'express started on http://localhost:' + app.get('port') + '; Press Ctrl-C to terminate.');
});
