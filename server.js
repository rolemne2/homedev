const express = require('express');
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.get('/', function(req, res){
    res.send('<a href="/p">Click!</a>');
});

app.get('/p', function(req,res){
    res.status(200);
    res.sendFile(__dirname+'/public/index.html');
});

app.post('/g', function(req,res){
    console.log(req.body);
});

app.listen(3000, () => console.log('Listening on port 3000!'));