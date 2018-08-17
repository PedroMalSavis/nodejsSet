// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var jsonData = {count: 12, message: 'hey'};
var data = [
  {data:1, name:'pedro'},
  {data:2, name:'juan'},
  {data:3, name:'kennedy'}
]
const express = require('express');
const app = express();


app.get('/', function(res, req){
  res.json(data);
})
app.listen(3000);
