import { info } from "logger-luigiverde4"

export const log = (req, res, next) => {
    const start = new Date()
    info(`${req.method} - ${start} - Middleware! `)

    res.on("finish", () => {
        const duration = start - new Date()
        console.log(`${req.method} ${req.originalUrl} - Status: ${res.statusCode} - Duration: ${duration}ms`)

    })
    next()
}

export const log2 = (req, res, next) => {
    const start = new Date()
    info(`${req.method} - ${start} - Middleware! `)
    res.on("finish", () => {
        const duration = start - new Date()
        console.log(`${req.method} ${req.originalUrl} - Status: ${res.statusCode} - Duration: ${duration}ms`);

    })
    next()
}