//create http server
import exp from 'express'
const app=exp()
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'


function middleware(req,res,next){

    res.json({message:"this res is from middleware1"})
    console.log("middleware executed");
    next();
} 
console.log(middleware)


//use body parser middleware
app.use(exp.json())

//set a port number
const port=3000

//forword req to userapi if path starts with /user-api
app.use("/user-api",userApp)
//forword req to productapi if path starts with /product-api
app.use("/product-api",productApp)

//to assign port number to http server 
app.listen(port,()=>console.log(`server listing to ${port}...`))









// let users=[]

// //create api(representaion state transfer api)
// //route  
// app.get('/users',(req,res)=>{
//     res.json({message:"all users",payload:users})
// })

// app.post('/users',(req,res)=>{
//     const newUser=req.body
//     users.push(newUser)
//     res.json({"message":"User created "})
    
// })
// app.get('/users',(req,res)=>{
//     //get modified datafform client
//     //get index of exisiting user in users array
//     //send req
//     let modifiedUser=req.body
//     let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
//     if(index===-1){
//         return res.json({message:"user not found"})
//     }
//     users.splice(index,1,modifiedUser)
//     res.json({message:"user updated"})
// })
// app.put('/users',(req,res)=>{
//     //get modified user from client{}
//     //get index of the existing user in users array
//     //update user with index
//     //send res
//     let modifiedUser=req.body
//     let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
//     if(index===-1){
//         return res.json({message:"User not found"})
//     }
//     users.splice(index,1,modifiedUser)
//     res.json({message:"User updated",payload:users})
//    })
// app.put('/users/:id',(req,res)=>{
//  let idOfUrl=Number(req.params.id)
//     let user=users.find(userObj=>userObj.id===idOfUrl)
//     if(user===undefined){
//         return res.json({message:"user cot found"})
//     }
//     res.json({message:"a user",payload:user})
//     })
// app.delete('/users/:id',(req,res)=>{
//     //get id from url
//     //find index of user
//     //delete user with index
//     let idOfUrl=Number(req.params.id) //{id:"5"}==5
//     let index=users.findIndex(userObj=>userObj.id===idOfUrl)
//     if(index===-1){
//         return res.json({message:"user not found"})
//     }
//     users.splice(index,1)
//     res.json({message:"user removed"})
// })

// //create  product api 
// //create new product ({productid,name,brand,price})
// //read all products
// //read all products by brand 
// //update a product
// //delete a product by id
// let products=[]
// app.get('/products',(req,res)=>{
//     res.json({message:"all products",payload:products})
// })
// app.post('/products',(req,res)=>{
//     const newProduct=req.body
//     products.push(newProduct)
//     res.json({"message":"Product created "})    
// })

// app.put('/products',(req,res)=>{
//     let modifiedProduct=req.body
//     let index=products.findIndex(productObj=>productObj.productId===modifiedProduct.id)
//     if(index===-1){
//         return res.json({message:"Product not found"})
//     }
//     users.splice(index,1,modifiedProduct)
//     res.json({message:"Product updated",payload:users})
//    })

//    app.delete('/products/:id',(req,res)=>{
//     let idOfUrl=Number(req.params.productId) 
//     let index=products.findIndex(productsObj=>productsObj.productId===idOfUrl.productId)
//     if(index===-1){
//         return res.json({message:"product not found"})
//     }
//     products.splice(index,1)
//     res.json({message:"product removed"})
// })
