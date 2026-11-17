import User from "../models/user.model.js"

export const get = (req, res) => {
    res.json({
        "users": true
    })
}

export const post = (req, res) => {
    console.log(req.body)
    res.status(501).send("Usuario actualizado")
}

export const put = (req, res) => {
    console.log(req.params.id)
    res.send("Usuario actualizado")
}

export const deleteUser = (req, res) => {
    console.log(req.params.id)
    res.status(200).send("Usuario eliminado")
}

export async function getUserProfile(req, res) {
    const user = await User.findOne({ email: req.user.email })

    if (!user) {
        return res.status(404).json({ error: "User not found" })
    }
    res.json({
        "email": user.email,
        "name": user.name
    })
}