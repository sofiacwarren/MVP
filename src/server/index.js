const express = require('express');
const bodyParser = require('body-parser');
const queries = require('../db/index.js');
const app = express();
const PORT =  process.env.PORT || 3030;
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../../build'));
app.use(cors());

//get chart
app.post('/chart', async (req, res) => {
  // console.log('lol', req.body);
  try {
    let input = await {
      chart_name: req.body.chart_name
    };
    queries.retrieveChart(input)
      .then((data) => {
        console.log('data', data)
        res.send(data)
      })
  }
  catch (err) {
    res.status(400).send('error server side getting chart');
  }
})

//post chart
app.post('/charts', async (req, res) => {
  try {
    let input = await {
      chart: req.body.chart,
      chart_name: req.body.chart_name || 'test',
      columns: req.body.columns,
      user_id: req.body.user_id || 1
    };
    queries.saveChart(input)
    // console.log('server side', res)

      .then(() => res.status(200).send('saved!'));
  }
  catch (err) {
      res.status(400).send('error server side saving chart');
    }
  })

//put chart

//get user info
app.get('/user', (req, res) => {

})

//post user info
app.post('/user', (req, res) => {

})

//GET TEST
app.get('/test', (req, res) => {
  res.status(200).send('stuffs connected!!');
})
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});