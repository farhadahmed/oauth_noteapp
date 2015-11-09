var express = require('express');
var app = express();

var listeningPort = process.env.port || 3000;
app.set('port', (listeningPort));

app.use(express.static(__dirname + '/app'));

app.listen(listeningPort, function() {
  console.log('Server starting on port ' + listeningPort);
});
