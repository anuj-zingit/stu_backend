const stu=require('../model/stuModal')

function signup(req){
 const{name,age,email,password}=req.body;
 const newStu=new stu({
    name,age,email,password
 })
 console.log(newStu);
}

module.exports={signup}