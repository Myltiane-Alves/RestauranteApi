import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";

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

        const user = await userRepository.findOne({
            where: { email: req.body.email },
            select: [
                "email"
            ] 
        });

        if(!user) {
            return res.status(401).json({message: "User not found"});
        }

        return res.json({ message: "Email already exists"});
    }

    async verify(req: Request, res: Response) {

        try {
            const emailExist = await userRepository.findOne({
                where: { email: req.body.email},
            });

            if(emailExist) {
                return res.status(200).json({ message: "Email already exists"});
            }
        } catch (error) {
            return res.status(100).json({ message: "Email not found"})
        }
    }

    async checkPassword(req: Request, res: Response) {
        const user = await userRepository.findOne({
            where: { password: req.body.password},
            select: [
                'password'
            ]
        });

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user.password);

        if(!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        return res.status(200).json({ message: "Password is valid" });
    }
}

export default new UserControler;