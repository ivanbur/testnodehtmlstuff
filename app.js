const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PORT = 8080;

const URI = 'mongodb+srv://testing_username0:iamatester@clustertesting0-leley.mongodb.net/test?retryWrites=true';

var db;

function main() {
	connectDB();
	connectHTTP();
}

function connectDB() {
	mongoose.connect(URI, {useNewUrlParser: true});

	db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		console.log('connected!');
	})

	let obj = { xPos: Number,
				yPos: Number,
				col: Number,
				row: Number,
				hasPiece: Boolean,
				piece: Number };

	let arr = [obj, obj, obj, obj, obj, obj, obj, obj];

	let testSchema = new Schema({
		board: {
			tiles: [[{xPos: Number, yPos: Number, col: Number, row: Number,  hasPiece: Boolean, piece: Number}, {xPos: Number, yPos: Number, col: Number, row: Number, hasPiece: Boolean, piece: Number}, xPos: Number, yPos: Number, col: Number, row: Number,  hasPiece: Boolean, piece: Number, xPos: Number, yPos: Number, col: Number, row: Number,  hasPiece: Boolean, piece: Number, xPos: Number, yPos: Number, col: Number, row: Number,  hasPiece: Boolean, piece: Number, xPos: Number, yPos: Number, col: Number, row: Number,  hasPiece: Boolean, piece: Number, xPos: Number, yPos: Number, col: Number, row: Number,  hasPiece: Boolean, piece: Number, xPos: Number, yPos: Number, col: Number, row: Number,  hasPiece: Boolean, piece: Number],
					[obj, obj, obj, obj, obj, obj, obj, obj],
					arr,
					arr,
					arr,
					arr,
					arr,
					arr];
		}
	})

	let testSchema2 = newSchema({
		name: String,
		xPos: Number,
		yPos: Number,
		col: Number,
		row: Number,
		hasPiece: Boolean,
		piece: Number
	})
}

function connectHTTP() {
	router.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/templates/index.html'));
	});

	app.use('/js', express.static(__dirname + '/js'));
	app.use('/', router);

	app.listen(process.env.port || PORT);
}

function testFunc() {
	console.log('Test Function Called');
}

main();