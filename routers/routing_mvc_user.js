import express from "express"
import { getAll,getID,postNew } from "../controllers/routing_mvc_function.js";

const router= express.Router();

router.get("/:id",getID)

router.get("/all",getAll)

router.post("/new",postNew)

export default router;