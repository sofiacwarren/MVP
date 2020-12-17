var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:password@localhost:5432/knitting_charts');

//get chart
const retrieveChart = async (input, cb) => {
  let value = input.chart_name;
  try {
    let res = await db.query(`SELECT * FROM charts WHERE charts.chart_name = $1`, value);
    console.log(res)
    return res;
  }
  catch (err) {
    console.log('error db cannot get chart', value, err);
  }
}

//post chart
const saveChart = async (input, cb) => {
  let values = [input.chart, input.chart_name, input.columns, input.user_id];
  try {
    let res = await db.query(`INSERT INTO charts (chart, chart_name, columns, user_id) VALUES ($1, $2, $3, $4)`, values);
  }
  catch (err) {
    console.log('error db cannot post', values, err);
  }
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