import { NextFunction, Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AuthController {
    async register(req : Request, res : Response, next : NextFunction) {
        const { name, username, password } = req.body;
        
        const user = await prisma.user.create({
            data: {
                name,
                username,
                password
            }
        });
    }
}