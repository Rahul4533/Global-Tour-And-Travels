
import mongoose from "mongoose";

const connectDB=async()=>{

    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log(`MONGODB connected Successfully`)
        
    } catch (error) {

        console.log(`Mongodb not Connected `);
        
    }
}

export default connectDB;