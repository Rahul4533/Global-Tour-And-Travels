
import jwt from 'jsonwebtoken'
export const auth=(req,res,next)=>{

    const token=req.cookies.access_token;
    if(!token){

        return res.status(404).json("You are not aunthicated")
    }

    jwt.verify(token,process.env.SEC,(err,user)=>{
         
        if(err){
            return res.status(404).json("inavid token")
        }
            console.log(user)
        req.user=user;
        next();
    })

}