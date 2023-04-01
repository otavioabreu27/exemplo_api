import { Request, Response } from "express";

class View {
    async get (req: Request, res: Response){
        try {
            const response = await fetch('http://localhost:3000/api/back', {method: "GET"})
            const res_object = await response.json()
            res.render("teste", {resp:res_object})
        } catch(exception) {
            res.send(`A error has ocurred: ${exception}`)
        }
    }
}

export default new View;