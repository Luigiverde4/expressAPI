

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