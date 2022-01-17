const express = require('express')
const bodyParser = require("body-parser");
const app = express();

// expecting json data from frontend
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.sendFile(__dirname +  '/form.html');
})

app.get('/form/:fname', function(req, res){
    res.send('Hello '+ req.params.fname);
  })

app.post('postRequest', function(req, res) {

    const getName=req.body.name;
    res.send('The Query is sent by the person named ' + getName);
})

app.listen(3000);