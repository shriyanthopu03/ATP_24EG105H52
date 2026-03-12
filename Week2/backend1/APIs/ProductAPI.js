import exp from 'express'
export const productApp=exp.Router()


let products=[]
productApp.get('/products',(req,res)=>{
    res.json({message:"all products",payload:products})
})
productApp.post('/products',(req,res)=>{
    const newProduct=req.body
    products.push(newProduct)
    res.json({"message":"Product created "})    
})

productApp.put('/products',(req,res)=>{
    let modifiedProduct=req.body
    let index=products.findIndex(productObj=>productObj.productId===modifiedProduct.id)
    if(index===-1){
        return res.json({message:"Product not found"})
    }
    users.splice(index,1,modifiedProduct)
    res.json({message:"Product updated",payload:users})
   })

productApp.delete('/products/:id',(req,res)=>{
    let idOfUrl=Number(req.params.productId) 
    let index=products.findIndex(productsObj=>productsObj.productId===idOfUrl.productId)
    if(index===-1){
        return res.json({message:"product not found"})
    }
    products.splice(index,1)
    res.json({message:"product removed"})
})
