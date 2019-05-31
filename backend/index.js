const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 4000;

require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', function(error) {
	console.log('🙅‍♀️🙅‍♀️🙅‍♀️', error.message);
});

require('./models/Question');

app.use(cors());

const routes = require('./routes');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/', routes);

const server = app.listen(PORT, function() {
	console.log('Express server running on port', PORT);
});
