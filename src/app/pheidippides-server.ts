import express, { Express, Handler } from 'express'

export class PheidippidesServer {
    private readonly express: Express
    private readonly port: number
    private readonly host: string
    
    constructor(host: string, port: number, endpoints: Endpoint[]) {
        this.express = express()
        this.host = host
        this.port = port
        endpoints.forEach(it => this.createEndpoint(it))
    }

    private createEndpoint(endpoint: Endpoint) {
        this.express[endpoint.httpVerb](endpoint.route, endpoint.handler)
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

export interface Endpoint {
    httpVerb: 'get' | 'post' | 'put' | 'delete'
    route: string
    handler: Handler
}