import express from "express"
import process from "node:process"
import router from "./routes/index.js"
import { dbConnection } from "./config/db.js"
import { errorHandler } from "./middlewares/errorhandler.js"
// import "./fakebd.js"

const PORT = process.env.PORT

const app = express()
app.use(express.json())



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

app.use(errorHandler)

dbConnection()
    .then(() => {
        console.log("Database connected")
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        })
    })
    .catch((error) => {
        console.log("Error")
        console.log(error)
    })

