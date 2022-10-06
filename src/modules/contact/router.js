import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/contact", controller.GET);
router.get("/contact/:contactId", controller.GET);
router.post("/contact", controller.POST);


export default router;
