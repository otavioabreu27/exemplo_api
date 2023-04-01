import { Router } from "express";
import Backend from "../controllers/back";

const routes = Router();

routes.get("/back", Backend.get);

export default routes;
