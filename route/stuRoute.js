const express=require('express');
const stuContoller = require('../controller/stuContoller');
const router=express.Router();

router.post("/",(req,res)=>{
    stuContoller.signup();
    console.log(req)
    return res.send('hello')
})

module.exports=router;