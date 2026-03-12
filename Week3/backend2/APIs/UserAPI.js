//Create mini-express application(Seperate route)
// import exp from 'express'
// import {hash,compare} from "bcrypt"
// import { UserModel } from '../modules/UserModel.js'
// export const userApp=exp.Router()
// import jwt from 'jsonwebtoken'
// const {sign}=jwt


// //Define User REST API routes

// //Create new User
// userApp.post("/users",async(req,res)=>{

//     //Get new user object from req
//     const newUser=req.body

//     //hash the pasword 
//     const hashedPassword = await hash(newUser.password, 10);
//     newUser.password=hashedPassword;
//     //Create new user document
//     const newUserDocument=new UserModel(newUser)

//     //Save
//     const result=await newUserDocument.save()
//     console.log("Result: ",result)

//     //Send response
//     res.status(201).json({message:"User created"})
// })

// userApp.get("/users",async(req,res)=>{
//     let usersList=await UserModel.find()
//     res.status(200).json({message:"users",payload:usersList})
// })

// userApp.get("/users/:id",async(req,res)=>{
//     const uid=req.params.id
//    const userObj= await UserModel.findById(uid)
//     res.status(200).json({message:"user",payload:userObj})
// })
// userApp.put("/users/:id",async(req,res)=>{
//     const modifiedUser=req.body
//     const uid=req.params.id
//     const updatedUser=await UserModel.findByIdAndUpdate(
//         uid,
//         {$set:{...modifiedUser}},
//         {new: true,runValidators:true}
//     )

//     res.status(200).json({message:"User Modified",payload:updatedUser})
// })

// userApp.delete("/users/:id",async(req,res)=>{
//     let uid=req.params.id;
//     let deletedUser=await UserModel.findByIdAndDelete(uid)
//     if(!deletedUser){
//         return res.status(404).json({message:"user not found"})
//     }
//     res.status(200).json({message:"user removed",payload:deletedUser})
// })



//define rest api routes
//create new user 
// userApp.post("/users",async(req,res)=>{
//     //get new user object from req
//     const newUser=req.body;
//     //hash the password
//     const hashedPassword=await hash(newUser.password,10)
//     //replace the plain password 
//     newUser.password=hashedPassword;
//     //create new user document
//     const newUserDocument=new UserModel(newUser)
//     //save
//    const result= await newUserDocument.save()
//    console.log('result',result)
//    //send req
//     res.status(201).json({message:"User is created"})//document is succesful then the status code is 201
// });


// userApp.get("/users",async(req,res) => {
//         let usersList=await UserModel.find();
//         res.status(200).json({message:"users",payload:usersList})//operation is success if status code is 201 and creation//400 -bad request client error and 401 is unautharised resource and 404 is not found  error //500s series tells about the server side problem.
//     })
// userApp.get("/users/:id",async(req,res)=>{
//     //read object id from request params
//     const uid=req.params.id
//     //find user by id
//    const userObj= await UserModel.findById(uid)
//     //if user not found
//     if(!userObj){
//         return res.status(404).json({message:"user not found"})
//     }
//    //send res
//     res.status(200).json({message:"user",payload:userObj})
// })
// //use findOne methode to read a document with to non object id fields.Use findById to read document with object id
// userApp.put("/users/:id",async(req,res)=>{
//     //get modified user from req body
//     const modifiedUser=req.body;
//     const uid=req.params.id;
//     //find user by id and update
//     const updatedUser= await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})
//      res.status(200).json({message:"user",payload:modifiedUser})
// })

// userApp.delete("/users/:id",async(req,res)=>{
//     let uid=req.params.id;
//     //find and delete by id
//     let deletedUser=await UserModel.findByIdAndDelete(uid)
//     //send res
//     res.status(200).json({message:"User Deleted"})
// })


// //user userLogin

// userApp.post('/auth',async(req,res)=>{
//     const{email,password}=req.body;
//     //verfiy email
//     let user=await UserModel.findOne({email:email})

//     if(user===null){
     
//         return res.status(404).json({message:"Invalid email"})
//     }
//     //compare the passwords
//     let result=await compare(password,user.password)
//     //if passwords are not matched 
//     if(result===false){
//         return res.status(400).json({message:"Invalid password"})
//     }
//     //if password is correct then create token (jaat or jwt jsontoken) and send res
//     const signedToken=sign({email:user.email},"abcdef",{expiresIn:10})
//     //store token in httponly cookie
//     res.cookie("token",signedToken,{
//         httpOnly:true,
//         sameSite:"lax",
//         secure:false
//     })
//     res.status(200).json({message:"Login Success",payload:user})

// })

//create min-express app(Seperate route)
import exp from "express";
import { UserModel } from "../modules/UserModel.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/verifyToken.js";
const { sign } = jwt;
export const userApp = exp.Router();

//DEFINE USER REST API Routess

//user login
userApp.post("/auth", async (req, res) => {
  //get user cred obj from client
  const { email, password } = req.body;
  //verify email
  let user = await UserModel.findOne({ email: email });
  //if email not existed
  if (user === null) {
    return res.status(400).json({ message: "Invalid email" });
  }
  //compare passwords
  let result = await compare(password, user.password);
  //if passwords not matched
  if (result === false) {
    return res.status(400).json({ message: "Invalid password" });
  }
  //if passwords are matched
  //create token (jsonwebtoken -jwt--jaat)
  const signedToken = sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: "1h" });
  //store token as httpOnly cookie
  res.cookie("token",signedToken,{
    httpOnly:true,
    sameSite:"lax",
    secure:false
  })
  //send res
  res.status(200).json({message:"login success",payload:user})  
});

//Create new User
userApp.post("/users", async (req, res) => {
  //get new user obj from req
  const newUser = req.body;
  //hash the password
  const hashedPassword = await hash(newUser.password, 10);
  //replace plain password with hashed password
  newUser.password = hashedPassword;
  //Create new user document
  const newUserDocument = new UserModel(newUser);
  //save
  const result = await newUserDocument.save();
  console.log("result :", result);
  //send res
  res.status(201).json({ message: "User created" });
});

//Read all users(protected route)
userApp.get("/users",verifyToken ,async (req, res) => {
  //read all users from db
  let usersList = await UserModel.find();
  //send res
  res.status(200).json({ message: "users", payload: usersList });
});

//Read a User by ObjectID
userApp.get("/users",verifyToken ,async (req, res) => {
  //read user email from req
  const emailOfUser=req.user?.email;
  //find user by email
  const userObj = await UserModel.findOne({email:emailOfUser}).populate("cart.product");
  //if user not found
  if (!userObj) {
    return res.status(404).json({ message: "User not found" });
  }
  //send res
  res.status(200).json({ message: "user", payload: userObj });
});

//Update a User by id
userApp.put("/users/:id", async (req, res) => {
  //get modified user from req
  const modifiedUser = req.body;
  const uid = req.params.id;

  //find user by id & update
  const updatedUser = await UserModel.findByIdAndUpdate(
    uid,
    { $set: { ...modifiedUser } },
    { new: true, runValidators: true },
  );
  //send res
  res.status(200).json({ message: "User modified", payload: updatedUser });
});

//delete user by id
userApp.delete("/users/:id", async (req, res) => {
  //get id from req params
  let uid = req.params.id;
  //find & delete user by id
  let deletedUser = await UserModel.findByIdAndDelete(uid);
  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }
  //send res
  res.status(200).json({ message: "user removed", payload: deletedUser });
});
//add product to cart

//add product to cart
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //get product id from url parm
    let productId=req.params.pid
    //get current user details
    const emailOfUser=req.user?.email
    

    //add product to cart

    //before add,first it should check that product is already in the cart 
    //if product is there then increment count by 1
    //otherwise add the product to cart
    let userCart=await UserModel.findOne({email:emailOfUser, "cart.product":productId})
    if(userCart){
        let result=await UserModel.findOneAndUpdate({email:emailOfUser,"cart.product":productId}, {$inc:{"cart.$.count":1}},{new:true})
        if(!result){
            return res.status(404).json({message:"User not found"})
        } 
        return res.status(200).json({message:"Product count is incremented in cart"})
    }


    //get user form db
    const user=await UserModel.findOne({email:emailOfUser})
    //if user is invalid
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    let result=await UserModel.findOneAndUpdate({email:emailOfUser},
        {$push:{cart:{product:productId}}})
    
    if(!result){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:"Product added to Cart"})

})










// User created   === "User  created" -->false
// 200 -- success
// 201 -- created
// 400 -- bad request
// 401 -- Unauthorised
// 404 -- Not found
// 500 -- Server error


//app.use(verifyToken) -->every req
//userApp.get(path,verifyToken,req-handler)