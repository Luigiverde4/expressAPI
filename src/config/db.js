import mongoose from "mongoose"


export async function dbConnection() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test")
    } catch (error) {
        console.log(error)
    }
}