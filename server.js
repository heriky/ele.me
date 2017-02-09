var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(path.resolve(__dirname, './dist')))

app.listen(3000, ()=>{console.log('Server is running on port 3000')});

process.send('listening');
