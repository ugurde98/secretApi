import { Router } from "express";
import { cheaterRoute } from "./cheaterRoute.js";
import { userRoute } from "./userRoute.js";


 const router = Router();

router.use('/cheaters', cheaterRoute);
router.use('/users', userRoute);


 export  {router};