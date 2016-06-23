var express = require('express');

var app = express();

app.engine('mustache', require('mustache-express4'));
app.set('view engine', 'mustache');
app.set('partials', __dirname + '/views/partials');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render("index", {name: "Freewind"});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});