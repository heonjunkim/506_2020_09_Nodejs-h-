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
  let name = req.body.name;
  let date = moment(new Date()).format("YYYY-MM-DD");
  let time = moment(new Date()).format("HH:mm:ss");
  let title = name + " 님 반갑습니다";

  res.render("index", {
    title: title,
    date: date,
    time: time,
  });
});

module.exports = router;
