const express = require('express');
const bodyParser = require('body-parser');
const queries = require('../db/index.js');
const app = express();
const PORT =  process.env.PORT || 3030;

app.use(bodyParser.json());

//get chart

//post chart
app.post('/charts', (req, res) => {
  let input = {};
  db.saveChart(input)
    .then((res) => {
      res.status(200).send('saved!');
    })
    .catch((error) => {
      res.status(400).send('error server side saving chart');
    })
})

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