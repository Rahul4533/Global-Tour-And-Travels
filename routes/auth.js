import express from "express";
import { login, register } from "../controller/authcntrl.js";
import { auth } from "../middlewere/authuser.js";

const router=express.Router();


router.post('/',auth,register);
router.post('/login',login);

export default router;