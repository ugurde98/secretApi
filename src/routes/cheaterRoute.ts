import { Router } from "express";
import { createCheater, deleteCheater, getCheaterById, getCheaters, updateCheater } from "../controllers/cheaterController.js";

const cheaterRoute = Router();


cheaterRoute.get('/',getCheaters);
cheaterRoute.get('/:id',getCheaterById);
cheaterRoute.post('/',createCheater);
cheaterRoute.put('/:id',updateCheater);
cheaterRoute.delete('/:id',deleteCheater);



export {cheaterRoute};