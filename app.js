const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

const URI = 'mongodb+srv://testing_username0:iamatester@clustertesting0-leley.mongodb.net/test?retryWrites=true';
const dbName = 'aTestDatabase';
const client = new MongoClient(URI);

// var htmlFile;
// var jsFile;

// fs.readFile('./index.html', function(err, html) {
// 	if (err) throw err;

// 	htmlFile = html;
// });

// fs.readFile('./frontend.js', function(err, js) {
// 	if (err) throw err;

// 	jsFile = js;
// });

// http.createServer(function(req, res) {
// 	res.setHeader('Content-Type', 'text/html');

// 	if (req.url === '/') {
// 		res.write(htmlFile);
// 	} else {
// 		res.write('Page not found!');
// 	}
// 	res.end();
// }).listen(PORT);

app.use(express.static(__dirname + '/testnodehtmlstuff'));

app.get('/frontend.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/frontend.js'));
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT);

client.connect(function(err) {
	assert.equal(null, err);
	console.log('Connected successfully to server!');

	let db = client.db(dbName);

	db.collection('aTestCollection').findOne({}, function(err, result) {
		console.log(result.aTestInt);
	})

	client.close();
});

function clickFunction() {
	console.log('clicked button');
}

function testFunc() {
	console.log('Test Function Called');
}