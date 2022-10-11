import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/contact", controller.GET);
router.get("/contactadmin", controller.GETADMIN);
router.get("/contact/:contactId", controller.GET);
router.put('/contact/:contactId',controller.PUT);
router.post("/contact", controller.POST);
router.delete('/contact/:contactId',controller.DELETE);


export default router;
