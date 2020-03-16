var express = require("express");

const router = express.Router();
var jwt = require("jsonwebtoken");
 var db = require('../db/configdb') 

const firebase = require("firebase");
require("firebase/firestore");





router.post("/login", function(req, res) {
   
   firebase.auth().signInWithEmailAndPassword(req.body.userEmail, req.body.userPassword).then(user => {
        if (user) {
            return res.json({ success: true ,data:user});
      
        } else {
          return res.json({ success: false ,data:"User  is not Found"});
        }
      }).catch((err)=>{
        return res.json({ success: false ,data:err});
    
    
    });;
     
})

module.exports = router;
