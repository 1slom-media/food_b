import { Router } from "express";
import controller from "./controller.js";
import upload from "../../lib/multer.js";

const router = Router();

router.get("/products", controller.GET);
router.get("/products/:productId", controller.GET);
router.put("/products/:productId",upload.single('image'),controller.PUT);
router.post("/products",upload.single('image'),controller.POST);
router.delete("/products/:productId", controller.DELETE);


export default router;