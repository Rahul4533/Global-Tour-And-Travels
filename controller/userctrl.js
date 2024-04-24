import User from "../models/user.js";
import bcryptjs from "bcryptjs";
export const registerUser = async (req, res) => {
  const { username, email, password, city, address } = req.body.data;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      const pass = await bcryptjs.genSalt(10);
      const salt = await bcryptjs.hash(password, pass);
     
      const data = await User.create({
        username: username,
        email: email,
        password: salt,
        city: city,
        address: address,
      });

      return res
        .status(200)
        .send({
          message: "User Registered Success",
          success: true,
          user: data,
        });
    }

    res.status(200).send({ message: "User Already Exist", success: false });
  } catch (error) {
    res.status(500).send({ message: "Internal Server error", success: false });
  }
};
