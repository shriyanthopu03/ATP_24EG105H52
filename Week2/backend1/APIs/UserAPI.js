import exp from 'express'
export const userApp=exp.Router()

let users=[]

//create api(representaion state transfer api)
//route  
userApp.get('/users',(req,res)=>{
    res.json({message:"all users",payload:users})
})

userApp.post('/users',(req,res)=>{
    const newUser=req.body
    users.push(newUser)
    res.json({"message":"User created "})
    
})
userApp.get('/users',(req,res)=>{
    //get modified datafform client
    //get index of exisiting user in users array
    //send req
    let modifiedUser=req.body
    let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    if(index===-1){
        return res.json({message:"user not found"})
    }
    users.splice(index,1,modifiedUser)
    res.json({message:"user updated"})
})
userApp.put('/users',(req,res)=>{
    //get modified user from client{}
    //get index of the existing user in users array
    //update user with index
    //send res
    let modifiedUser=req.body
    let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    if(index===-1){
        return res.json({message:"User not found"})
    }
    users.splice(index,1,modifiedUser)
    res.json({message:"User updated",payload:users})
   })
userApp.put('/users/:id',(req,res)=>{
 let idOfUrl=Number(req.params.id)
    let user=users.find(userObj=>userObj.id===idOfUrl)
    if(user===undefined){
        return res.json({message:"user cot found"})
    }
    res.json({message:"a user",payload:user})
    })
userApp.delete('/users/:id',(req,res)=>{
    //get id from url
    //find index of user
    //delete user with index
    let idOfUrl=Number(req.params.id) //{id:"5"}==5
    let index=users.findIndex(userObj=>userObj.id===idOfUrl)
    if(index===-1){
        return res.json({message:"user not found"})
    }
    users.splice(index,1)
    res.json({message:"user removed"})
})
