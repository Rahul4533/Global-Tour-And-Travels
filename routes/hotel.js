import express from "express";
import Hotels from '../controller/hotelController.js'
import { auth } from "../middlewere/authuser.js";
const router=express.Router();

router.post('/',auth,Hotels.saveHotels); 



export default router;