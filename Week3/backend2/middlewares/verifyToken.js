
import jwt from "jsonwebtoken";

export function verifyToken(req,res,next){
    const token = req.cookies?.token;

    if(!token){
        return res.status(401).json({message:"Please login"});
    }
    // if token is valid or it is existed
    try{
        const decodedToken = jwt.verify(token,"abcdef");
        console.log(decodedToken);
        req.user = decodedToken;
        next();
    }
    catch(err){
        res.status(401).json({message:"Session expired. Please login again"});
    }
}