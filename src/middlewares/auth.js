import jwt from "jsonwebtoken"
import process from "node:process"

function auth(req, res, next) {
    const authorization = req.headers.authorization
    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Authorization header missing" })
    }


    const token = authorization.split(" ")[1]
    if (!token) {
        return res.status(401).json({ error: "Token not found" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Invalid token" })
        }
        req.user = decoded
        console.log("User authenticated:", req.user)
        next()
    })
}

export default auth