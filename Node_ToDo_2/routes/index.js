var express = require("express");
var router = express.Router();
const moment = require("moment");

var todoVO = require("../models/todo_model");
/* GET home page. */
router.get("/", function (req, res, next) {
  todoVO.find().then(function (todoList) {
    res.render("index", { todoList });
  });
});

router.post("/", function (req, res) {
  let t_date = moment().format("YYYY-MM-DD");
  let t_time = moment().format("HH:mm:ss");

  req.body.t_date = t_date;
  req.body.t_time = t_time;

  let data = new todoVO(req.body);

  data
    .save()
    .then(function (todoVO) {
      res.redirect("/");
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get("/delete/:id", function (req, res) {
  let id = req.params.id;
  todoVO
    .findOneAndDelete({ _id: id })
    .then(function (result) {
      res.redirect("/");
    })
    .catch(function (error) {
      console.error(error);
    });
});
router.get("/update/:id", function (req, res) {
  let id = req.params.id;
  todoVO.findOne({ _id: id }).then(function (result) {
    res.render("t_text", { todoVO: result });
  });
});
router.post("/update/:id", function (req, res) {
  let id = req.params.id;
  req.body._id = id;
  todoVO
    .updateOne(
      { _id: id },
      {
        t_text: req.body.t_text,
      }
    )
    .then(function (result) {
      res.redirect("/");
    });
});

module.exports = router;
