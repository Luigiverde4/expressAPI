import express from "express"
import { log, log2 } from "../middlewares/logger.js"
import { get, post, put, deleteUser, getUserProfile } from "../controllers/user.controller.js"
import auth from "../middlewares/auth.js"
const router = express.Router()

router.get("/", log, log2, get)
router.get("/profile", auth, getUserProfile)
router.post("/:id", log, log2, post)
router.put("/:id", log, log2, put)
router.delete("/:id", log, log2, deleteUser)





export default router