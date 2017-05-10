var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));

app.get('/whoami', function (req, res) {
    var forwardedIpsStr = req.header('x-forwarded-for');
    var userAgent = req.header('user-Agent').split(/[()]/g)[1];
    var userLanguage = req.header('accept-language').split(";")[0];
    var result = {"ipadress": forwardedIpsStr, "language": userLanguage, "software": userAgent}
  res.render('index', {info: JSON.stringify(result)})})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})