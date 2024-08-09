import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

//get Cheaters
export const getCheaters = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    try {
        const cheaters = await prisma.cheater.findMany();
        if (cheaters.length === 0) {
            return res.status(404).json({ message: "Cheaters not found" });
        }
        return res.json(cheaters);

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}


//getById
export const getCheaterById = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const { id } = req.params;
    try {
        const cheater = await prisma.cheater.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!cheater) {
            return res.status(404).json({ message: "Cheater not found" });
        }
        return res.json(cheater);
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

//post
export const createCheater = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const { uid, reason } = req.body;
    try {
        if (!uid ) {
            return res.status(400).json({ message: "uid are required" });
        }
        if (!reason) {
            return res.status(400).json({ message: "reason are required" });
        }
  
        const cheater = await prisma.cheater.create({
            data: {
                uid,
                reason
            }
        });
        return res.json(cheater);
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

//update
export const updateCheater = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const { id } = req.params;
    const { uid, reason, status } = req.body;

    try {

        const cheater = await prisma.cheater.update({
            where: {
                id: parseInt(id)
            },
            data: {
                uid,
                reason,
                status
            }
        });
        return res.json(cheater);
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}
//delete

export const deleteCheater = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({ message: "id are required" });
        }

        const cheater = await prisma.cheater.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!cheater) {
            return res.status(404).json({ message: "Cheater not found" });
        }


        const cheaterdel = await prisma.cheater.delete({
            where: {
                id: parseInt(id)
            }
        });
        return res.json(cheaterdel);
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}
