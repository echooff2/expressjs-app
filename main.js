const express = require('express');
const app = express();
const port = 8080;

app.get('/', function(req, res) {
	res.send('echooff loves contributing to ScoreLab');
});

app.listen(port, function() {
	console.log('App is running on port ' + port);
});