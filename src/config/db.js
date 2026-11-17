import mongoose from "mongoose"
import process from "node:process"

export async function dbConnection() {
    try {
        await mongoose.connect(process.env.DB)
    } catch (error) {
        throw new Error("Error conectando a la bbdd", { cause: error })
    }
}