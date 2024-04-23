import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const pass = await bcryptjs.genSalt(10);
    const salt = await bcryptjs.hash(req.body.password, pass);
    req.body.password = salt;
    const result = await User.create(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const login=async (req,res)=>{
        
    try {

        const user=await User.findOne({username:req.body.username});
        if(!user){

            return res.status(404).json({ error: 'User not found' });
         
        } 

        const isAuthenticated = await bcryptjs.compare(req.body.password,user.password);
             
        if (!isAuthenticated) {
            return res.status(401).json({ error: 'Invalid user / password' });
          }
      
            
        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SEC)

        const {password,isAdmin,...other}=user._doc;
       res.cookie("access_token",token,{
        httpOnly:true
       }).status(200).json({
        message:"Login succees",
        other
       })
    } catch (error) {
        res.status(500).json(error)
    }

}