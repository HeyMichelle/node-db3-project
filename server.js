const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

// error middleware catches all previous middleware errors, place last in file, is there another middleware that does this?
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong, try again",
	})
})

module.exports = server;