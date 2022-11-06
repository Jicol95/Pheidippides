import express, { Express, Router } from 'express'

export class PheidippidesServer {
    private readonly express: Express
    private readonly port: number
    private readonly host: string
    
    constructor(host: string, port: number, router: Router, baseUrl: string) {
        this.express = express()
        this.express.use(baseUrl, router)
        this.host = host
        this.port = port
    }

    public async listen() {
        return this.express.listen(
            this.port,
            this.host,
            () => console.log(
                    `Server started at ${this.host}:${this.port}`
                )
        )
    }
}