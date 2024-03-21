const express = require("express");
const router = express.Router();
const user = require("../controllers/auth");

router.route("/signup").post(user.addUser);
router.route("/login").post(user.checkUser);
router.route("/getuserdata").get(user.getUser);
router.route("/deleteuserdata/:id").delete(user.deletUser);

module.exports = router;
