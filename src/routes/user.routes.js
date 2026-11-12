import express from "express"
import { log, log2 } from "../middlewares/logger.js"


const router = express.Router()

router.get("/", log, log2, (req, res) => {
    res.json({
        "users": true
    })
})

router.post("/:id", (req, res) => {
    console.log(req.body)
    res.status(501).send("Usuario actualizado")
})

router.put("/:id", (req, res) => {
    console.log(req.params.id)
    res.send("Usuario actualizado")
})

router.delete("/:id", (req, res) => {
    console.log(req.params.id)
    res.status(200).send("Usuario eliminado")
})




export default router