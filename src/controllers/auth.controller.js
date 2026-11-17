import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export async function register(req, res) {

    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create(
        {
            email,
            password: hashedPassword
        }
    )
    res.status(201).json({
        message: "User registered",
        data: {
            id: user.id,
            email: user.email
        }
    })

}


export async function login(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" })
    }

    const user = await User.findOne({ where: { email } })
    if (!user) {
        return res.status(401).json({ error: "User or email invalid" })
    }
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
        return res.status(401).json({ error: "User or email invalid" })
    }


    res.status(200).json({
        message: "User logged in",
        data: { id: user.id, email: user.email }
    })
}
