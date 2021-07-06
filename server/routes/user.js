const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../models");
const jwt = require("jsonwebtoken");
const authenticateToken = require("./authenticateToken");

module.exports = router;