const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const http = require('http');
const fs = require('fs');

const PORT = 8080;

const URI = "mongodb+srv://testing_username0:iamatester@clustertesting0-leley.mongodb.net/test?retryWrites=true";
const dbName = "aTestDatabase";
const client = new MongoClient(URI);

fs.readFile('./index.html', function(err, html) {
	if (err) throw err;

	http.createServer(function(req, res) {
		res.setHeader("Content-Type", "text/html");
		res.write(html);
		// res.write("<script src='other.js'></script>");
		// res.write("What up");
		// res.write("<button onclick='testFunc()'>Click me!</button>")
		res.end();
	}).listen(PORT);
})


client.connect(function(err) {
	assert.equal(null, err);
	console.log("Connected successfully to server!");

	let db = client.db(dbName);

	db.collection("aTestCollection").findOne({}, function(err, result) {
		console.log(result.aTestInt);
	})

	client.close();
});

function clickFunction() {
	console.log("clicked button");
}

function testFunc() {
	console.log("Test Function Called");
}