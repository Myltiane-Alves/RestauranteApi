import { NextFunction, Request, Response } from "express";


interface TokenPayload {
    user_id: number;
    iat: number;
    exp: number;
} 

export default function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
){

    return next();
    
}