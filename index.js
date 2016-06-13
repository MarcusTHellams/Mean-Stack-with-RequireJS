var express = require('express');
var app = express();
var path = require('path');
var _ = require('lodash');
var Country;
var router = express.Router();
var Country = require('./models/countries/countries');

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'bower_components/angular-ui-bootstrap')));


app.get('/', function(req, res) {
	res.sendFile('views/index.html', {
		root: __dirname
	});
});



router.get('/numberOfTerritories', function(req, res) {
	Country.count({}, function(err, count) {
		res.send(count + '');
	});
});

router.get('/territories/:offset?/:limit?', function(req, res) {
	Country
		.find()
		.limit(req.params.limit * 1)
		.skip(req.params.offset * 1)
		.exec(function(err, countries) {
			res.json(countries);
		});
});

app.use('/api', router);


app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});