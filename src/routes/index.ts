import { Router } from "express";
import {default as backRoutes } from "./back"
import {default as viewRoutes } from "./view"

const router = Router();

router.use("/", viewRoutes);
router.use("/api", backRoutes);

export default router;
