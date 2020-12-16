import mongoose from 'mongoose';
const { Schema } = mongoose;

const knitting_chart_schema = new Schema({
  user_id: ObjectId,
  user_name: String,
  password: String,
  avatar: String,
  charts: [{chart_name: String, chart_data: Array}]
});

module.exports = mongoose.model('Knitting_Chart', knitting_chart_schema);