const express = require("express");
const router = express.Router();
const app = express();
const Joi = require("joi");
const { db } = require("../services/db.js");

// GET /
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/snake", function (req, res, next) {
  res.render("snake");
});
module.exports = router;
