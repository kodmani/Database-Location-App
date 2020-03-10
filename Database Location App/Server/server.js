const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const ejs = require('ejs');


const app = express();
app.use(cors());
app.use(ejs);

app.listen(8000, () => {
	console.log('Server started on 8000');
});


app.get('/', (req, res) => {
	console.log('got request', req);
	res.send('test');
});
