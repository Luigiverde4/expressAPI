import express from "express"
import { getTasks, createTask, deleteTask, deleteAllTasks } from "../controllers/tasks.controller.js"
import auth from "../middlewares/auth.js"
const router = express.Router()

router.get("/", auth, getTasks)
router.post("/", auth, createTask)
router.delete("/delete-all", auth, deleteAllTasks)
router.delete("/:id", auth, deleteTask)

export default router