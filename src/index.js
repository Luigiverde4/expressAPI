import express from "express"
import process from "node:process"
import userRouter from "./routes/user.routes.js"
import cron from "node-cron"

const PORT = process.env.PORT

const app = express()
app.use(express.json())

// Schedule a cron job to run every minute
cron.schedule("* * * * *", () => {
    console.log("Cron job")
})

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
