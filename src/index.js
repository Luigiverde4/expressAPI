import express from "express"
import process from "node:process"
import morgan from "morgan"
import userRouter from "./routes/user.routes.js"

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(morgan("dev"))

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


app.use("/users", userRouter)
