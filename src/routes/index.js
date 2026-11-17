import express from "express"
import userRouter from "./user.routes.js"
import authRouter from "./auth.routes.js"
import tasksRouter from "./tasks.routes.js"

const router = express.Router()
router.use("/users", userRouter)
router.use("/auth", authRouter)
router.use("/tasks", tasksRouter)

export default router