const { singup, login, logout } = require("../controllers/auth.controllers");

const router = require("express").Router();
router.post("/signup", singup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
