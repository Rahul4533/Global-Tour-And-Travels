import express from 'express';
import dotenv from "dotenv"
import auth from './routes/auth.js'
import hotels from './routes/hotel.js'
import rooms from './routes/room.js'
import users from './routes/user.js'
import cookieParser from 'cookie-parser';
import cors from "cors";
import connectDB from './config/db.js'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const PORT=8000;
dotenv.config();
connectDB(); 
 
const __dirname = dirname(fileURLToPath(import.meta.url));

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
 


app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', (req, res) => {
    const index = join(__dirname, './client/build/index.html');
    res.sendFile(index);
  });


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`); 
})

