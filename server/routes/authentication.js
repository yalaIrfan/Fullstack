/**
 * Created by tonyStark on 12/1/2016.
 */
var express = require('express');
var router = express.Router();
router.get('/register',function(req,res){
    res.render('register.ejs');
});
router.get('/login',function(req,res){
    res.render('login.ejs');
});
module.exports = router;