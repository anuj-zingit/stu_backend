const mongoose=require ('mongoose');
stuSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const stu=mongoose.model("stu",stuSchema);

mongoose.model=stu;

