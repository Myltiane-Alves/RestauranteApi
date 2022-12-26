import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

class UserControler {
    async store(req: Request, res: Response) {
        
        const {
            email,
            password,
            photo,
            name,
            phone,
            document
        } = req.body;

        const userExists = await userRepository.findOne({
            where: { email: req.body.email},
        });

        if(userExists) {
            return res.status(401).json({ message: "User already exists"})
        }

        try {

            const newUser = userRepository.create({
                email,
                password,
                photo,
                name,
                phone,
                document
                
              
            });

            await userRepository.save([newUser])
        } catch(error) {
            return res.status(500).json(error)
        }

        return res.status(201).json({ message: "User created"})
    }

    async getByEmail(req: Request, res: Response) {

    }
}

export default new UserControler;