const express = require("express");
const router = express.Router();

console.log("helo")

const {signup, login} = require("../controllers/Auth");
// const mailController = require("../controllers/mailController");


router.post('/signup', signup)
router.post('/login', login);
// router.post('/send-mail', mailController);

module.exports = router;
