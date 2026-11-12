import express from "express"
import process from "node:process"


const PORT = process.env.PORT

const app = express()
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