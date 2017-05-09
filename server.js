var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));

app.get('/whoami', function (req, res) {
    var forwardedIpsStr = req.header('x-forwarded-for');
    var userAgent = req.header('user-Agent');
    var userArr = userAgent.split(/[()]/g)
    var userLanguage = req.header('accept-language');
    var languageArr = userLanguage.split(";")
    var result = {"ipadress": forwardedIpsStr, "language": languageArr[0], "software": userArr[1]}
  res.render('index', {date: JSON.stringify(result)});
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})