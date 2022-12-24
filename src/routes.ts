import { Router } from "express";

import UserController from "./app/controllers/UserController";

class Routes {
    routes: Router;
    constructor() {
        this.routes = Router();
        this.init();
    }

    init() {
        this.routes.get("/ping", (req, res) => {
            res.status(200).json({ pong: new Date() });
        });


        this.routes.post('/users', UserController.store);       

    }   

}

export default new Routes().routes;