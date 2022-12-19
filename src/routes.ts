import { Router } from "express";

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

    }
}

export default new Routes().routes;