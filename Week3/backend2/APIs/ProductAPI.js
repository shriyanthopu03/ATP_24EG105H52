//Create mini-express application(Seperate route)
import exp from 'express'
import {hash} from "bcrypt"
import { ProductModel } from '../modules/ProductModel.js'

export const productApp=exp.Router()


productApp.post("/product",async(req,res)=>{
    
    const newProduct=req.body;
    
    const newProductDocument=new ProductModel(newProduct)
   const result= await newProductDocument.save()
   console.log('result',result)
   
    res.status(201).json({message:"Product is created"})//document is succesful then the status code is 201
});


productApp.get("/product",async(req,res) => {
        let productList=await ProductModel.find();
        res.status(200).json({message:"users",payload:productList})//operation is success if status code is 201 and creation//400 -bad request client error and 401 is unautharised resource and 404 is not found  error //500s series tells about the server side problem.
    })
productApp.get("/product/:id",async(req,res)=>{
    const pid=req.params.id
    //find user by id
   const productObj= await ProductModel.findById(pid)
    //if user not found
    if(!productObj){
        return res.status(404).json({message:"Product not found"})
    }
   //send res
    res.status(200).json({message:"Product",payload:productObj})
})
//use findOne methode to read a document with to non object id fields.Use findById to read document with object id
productApp.put("/product/:id",async(req,res)=>{
    //get modified user from req body
    const modifiedUProduct=req.body;
    const pid=req.params.id;
    //find user by id and update
    const updatedProduct= await ProductModel.findByIdAndUpdate(pid,{$set:{...modifiedUser}},{new:true,runValidators:true})
     res.status(200).json({message:"product",payload:modifiedProduct})
})

productApp.delete("/product/:id",async(req,res)=>{
    let uid=req.params.id;
    //find and delete by id
    let deletedProduct=await ProductModel.findByIdAndDelete(pid)
    //send res
    res.status(200).json({message:"Product Deleted"})
})