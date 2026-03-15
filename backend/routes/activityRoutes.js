import express from "express"
import { activityController } from "../controllers/activityController.js"
const router = express.Router();

router.get("/filter", activityController);




export default router;