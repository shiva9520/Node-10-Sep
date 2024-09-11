const express=require('express');
const app=express();
const User=require('./routes/user')
const PORT=3000;
app.use(User);

app.listen(PORT,(err)=>{
    if (err) {
        console.log('error...');
    } else {
        console.log('Server is running on ',PORT);
    }
})