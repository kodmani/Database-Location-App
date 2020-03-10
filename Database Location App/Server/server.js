const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());

app.listen(8000, () => {
	console.log('Server started on 8000');
});


app.get('/', (req, res) => {
	console.log('got request', req);
	res.send('test');
});
