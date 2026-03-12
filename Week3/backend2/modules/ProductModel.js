import {Schema,model} from 'mongoose'
const productSchema  = new Schema({
    //structure of user input
    productId:{
        type:Number,
        required:[true,"ProductId is required"],        
    },
    productName:{
        type:String,
        required:[true,'ProductName required']
    },
    price:{
        type:Number,
        required:[true,"Price required"],
        min:[10000,"MIN price is 10000"],
        max:[50000,"MAX price is 50000"]
    },
    brand:{
        type:String,
         required:[true,"Brand is reauired"]
    }
},{
    versionKey:false,
    timestamps:true
});
export const ProductModel = model("product",productSchema)