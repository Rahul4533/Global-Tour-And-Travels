import User from "../models/user.js";

export const registerUser = async (req, res) => {
  const { username, email, password, city, address } = req.body.data;
  try {
    const user = await User.findOne({email});
     
    if (!user) {

      const data = await User.create({

        username:username,
        email:email,
        password:password,
        city:city,
        address:address
      }
        
       );
   
       res.status(200).send({message:"User Registered Success",success:true,user:data});
    
    }
    return res
    .status(200)
    .send({ message: "User Already Exist", success: false });
   
  } catch (error) {

    res.status(500).send({message:"Internal Server error",success:false});
  }
};
