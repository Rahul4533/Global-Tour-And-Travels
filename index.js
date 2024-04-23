import express from 'express';
import dotenv from "dotenv"
import auth from './routes/auth.js'
import hotels from './routes/hotel.js'
import rooms from './routes/room.js'
import users from './routes/user.js'
import cookieParser from 'cookie-parser';
import cors from "cors";
import connectDB from './config/db.js'
const PORT=8000;
dotenv.config();
connectDB(); 
 


const app=express(); 

//middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//import packages 

app.use('/api/auth',auth);
app.use('/api/hotels',hotels);
app.use('/api/rooms',rooms);
app.use('/api/users',users);
 





app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`); 
})

