var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static('thepalatin'));
app.get('/', function (req, res) {
    res.sendFile('thepalatin/index.html');
});

app.listen(port, function () {
    console.log(`Example app listening on port !`);
});