const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/knitting_charts', {useNewUrlParser: true})
db.on('connected', () => {
  console.log(`connected to db at ${db.host}:${db.port}`);
});

//get chart
const retrieveChart = (cb) => {
  // db.query('', [])
}

//post chart
const saveChart = (input, cb) => {

}

//put chart
const updateChart = (input, cb) => {

}

//get user info
const retrieveUser = (cb) => {

}

//post user info
const addUser = (input, cb) => {

}

module.exports = {
  retrieveChart,
  saveChart,
  updateChart,
  retrieveUser,
  addUser
};