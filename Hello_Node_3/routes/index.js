var express = require("express");
var router = express.Router();
const moment = require("moment");

/* GET home page. */
router.get("/", function (req, res, next) {
  let date = moment(new Date()).format("YYYY-MM-DD");
  let time = moment(new Date()).format("HH:mm:ss");
  let title = "반갑습니다";
  res.render("index", { date: date, time: time, title: title });
});

router.post("/nameaddress", function (req, res) {
  let n = req.body.n; //요청입력,세번째칸은 변수명과 동일하게
  let date = moment(new Date()).format("YYYY-MM-DD");
  let time = moment(new Date()).format("HH:mm:ss");
  let title = n + " 님 반갑습니다";

  res.render("index", {
    title: title,
    date: date,
    time: time,
  });
});

module.exports = router;
