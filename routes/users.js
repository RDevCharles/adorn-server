var express = require('express');
var router = express.Router();
const UserCntrl = require("../controllers/auth");


//https://localhost:3000/users/create-account
router.post("/create-account", UserCntrl.createAccount);
//https://localhost:3000/users/login
router.post("/login", UserCntrl.signInWithEmail);
//https://localhost:3000/users/logout
router.post("/logout", UserCntrl.signOut);
//https://localhost:3000/users/delete-account
router.post("/delete-account", UserCntrl.deleteAccount);

module.exports = router;
