var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

var port = process.env.port || 3000;
app.listen(port, function() {
  console.log('Server starting on port ' + port);
});
