import {Schema,Types,model} from 'mongoose'
//create cart schema{product,count}
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"
    },
    count:{
        type:Number,
        default:1
    }
})





const userSchema  = new Schema({
    //structure of user input
    username:{
        type:String,
        required:[true,"Username is reauired"],
        minLength:[4,"Min length of username is 4 character"],
        maxLength:[6,"Max length shoul be 6 characters user name size exccedss.."]
        
    },
    password:{
        type:String,
        required:[true,'Password required']
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:[true,"Email already exixted"]
    },
    age:{
        type:Number
    },
    cart:[cartSchema],
},{
    versionKey:false,
    timestamps:true
});
export const UserModel = model("user",userSchema)