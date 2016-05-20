var url = 'mongodb://localhost:27017/test';
var mongoose = require('mongoose');
mongoose.connect(url);

mongoose.connection.on('connected', function() {
	console.log('Connected through Mongoose');
});

module.exports = mongoose.model('Country', new mongoose.Schema({}), 'territories');