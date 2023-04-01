import { Request, Response } from "express";
import back from "../service/back"

class Backend{
    async get (req: Request, res: Response){
        const response = back();
        res.send(response)
    }
}

export default new Backend;