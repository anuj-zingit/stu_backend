const express=require ('express');
const db=require('./dbConnection');
const router=require('./route/stuRoute');
const app = express();
app.use(express.json())
app.use(router)
app.listen(8000);
console.log('8000');