import express from "express"
import process from "node:process"
import router from "./routes/index.js"
import { dbConnection } from "./config/db.js"
import mongoose from "mongoose"
// import "./fakebd.js"

const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

app.get("/status", (req, res) => {
    res.json({
        "status": "ok",
        "version": "1.0"
    })
})

app.get("/", (req, res) => {
    res.send("Hola")
})


app.use("/", router)

dbConnection()
    .then(() => {
        console.log("Database connected")
    })
    .catch((error) => {
        console.log("Error in Database connection")
        console.log(error)
    })
