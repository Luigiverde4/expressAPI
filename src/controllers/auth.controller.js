import User from "../models/user.model.js";

export async function register(req, res) {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" })
        }

        const user = await User.create(
            {
                email,
                password
            }
        )

        res.status(201).json({
            message: "User registered",
            data: user
        }
        )
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export function login(req, res) {
    res.json("Usuario logineado")
}
