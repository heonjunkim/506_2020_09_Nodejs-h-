var mongoose = require("mongoose");

var schema = mongoose.Schema;

var todoVO = new schema({
  // 칼럼이름 : 데이터타입
  t_text: String,
  t_time: String,
  t_date: String,
});

module.exports = mongoose.model("tbl_todo", todoVO);
