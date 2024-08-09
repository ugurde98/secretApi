import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController";



const userRoute = Router();

userRoute.get('/',getUsers);
userRoute.post('/',createUser);



export {userRoute};