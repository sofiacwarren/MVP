const express = require('express');
const bodyParser = require('body-parser');
const queries = require('../db/index.js');
const app = express();
const PORT =  process.env.PORT || 3030;

app.use(bodyParser.json());

//get chart

//post chart

//put chart

//get user info

//post user info

//GET TEST
app.get('/test', (req, res) => {
  res.status(200).send('stuffs connected!!');
})
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});