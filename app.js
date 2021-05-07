var express = require('express');
var app = express();

const PORT = 3000;

app.get("/", (req, res, next) => {
	res.json("Hello world!");
});

app.listen(PORT || 3000, () => {
	console.log(`Server running in port ${PORT}`);
});
