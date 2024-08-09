import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

//get
export const getUsers = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    try {
        const users = await prisma.user.findMany({
            include: {
                Cheater: true
            }
        });
        if (users.length === 0) {
            return res.status(404).json({ message: "Users not found" });
        }
        return res.json(users);

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}
//post 
export const createUser = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const { name } = req.body;
    try {
        if (!name) {
            return res.status(400).json({ message: "name are required" });
        }
   
        const user = await prisma.user.create({
            data: {
                name
            }
        });
        return res.json(user);
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}