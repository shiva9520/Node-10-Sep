const Users=require('../users.json');
const fs=require('fs')
function getAllUsers(req,res) {
    res.json(Users);
}

function getUserById(req,res) {
    let id=Number(req.params.id);
    let user=Users.find(user=>user.id===id);
    res.json(user)  
}
function addUser(req,res) {
    let body=req.body; 
    body.id=Users.length+1;    
    Users.push(body);
    fs.writeFile('users.json',JSON.stringify(Users),(err)=>{
        if (err) {
            res.json({msg:"error..."})
        } else {
            res.json({msg:"Added successfully..."})
        }
    })

}
function editUser(req,res) { 
    let id=Number(req.params.id);
    let changeName="Ravi";
    let user=Users.find(user=>user.id===id); 
    user.first_name=changeName;  
    fs.writeFile('users.json',JSON.stringify(Users),(err)=>{
        if (err) {
            res.json({msg:"error..."})
        } else {
            res.json({msg:"update successfully..."})
        }
    })

}

module.exports={
    getAllUsers,
    getUserById,
    addUser,
    editUser
}