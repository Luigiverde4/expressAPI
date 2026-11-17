import Task from "../models/task.model.js"

export async function getTasks(req, res) {
    const id = req.user.id
    try {
        // Buscar todas las tareas asociadas al usuario
        const tasks = await Task.find({ userId: id })
        res.json(tasks)
    } catch (err) {
        res.status(500).json({ error: "Error al obtener las tareas", errorMsg: err.message })
    }
}

export async function createTask(req, res) {
    const { title, description } = req.body
    const userId = req.user.id

    Task.create({ title, description, userId })
        .then((task) => {
            res.status(201).json(task)
        })
        .catch((err) => {
            res.status(500).json({ error: "Error al crear la tarea", errorMsg: err.message })
        })
}

export async function deleteTask(req, res) {
    const taskId = req.params.id
    const userId = req.user.id
    console.log("Deleting task with ID:", taskId, "for user ID:", userId)
    Task.findOneAndDelete({ _id: taskId, userId })
        .then((task) => {
            if (!task) {
                return res.status(404).json({ error: "Tarea no encontrada o no pertenece al usuario" })
            }
            res.json({ message: "Tarea eliminada correctamente" })
        })
        .catch((err) => {
            res.status(500).json({ error: "Error al eliminar la tarea", errorMsg: err.message })
        })
}