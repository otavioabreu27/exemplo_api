import { Router } from "express";
import View from "../controllers/view";

const routes = Router();

routes.get("/", View.get);

export default routes;
