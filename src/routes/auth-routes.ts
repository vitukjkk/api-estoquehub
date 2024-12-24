import { Router, Request, Response } from "express";

export const authRoutes = Router();

authRoutes.get("/", (req : Request, res : Response) => {
    console.log("valid");
    res.json({message: "hello world from auth routes!"});
});