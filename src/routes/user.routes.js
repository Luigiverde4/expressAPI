import express from "express"
import { log, log2 } from "../middlewares/logger.js"
import { get, post, put, deleteUser } from "../controllers/user.controller.js"

const router = express.Router()

router.get("/", log, log2, get)

router.post("/:id", log, log2, post)

router.put("/:id", log, log2, put)

router.delete("/:id", log, log2, deleteUser)




export default router