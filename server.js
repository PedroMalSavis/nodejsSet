const expressVue = require('express-vue');
const express = require('express');

const app = express();

const port = 3000;
app.listen(port, function(){
  console.log(`app is running on localhost:${port}`);
})
