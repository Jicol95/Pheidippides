import express, { Express } from 'express'
import { PheidippidesApp } from '../'
import { Configuration } from '../../configuration'

export class PheidippidesAppBuilder {
    private readonly app: Express
    private readonly configuration: Configuration
    private host: string | undefined
    private port: number

    constructor() {
        this.configuration = new Configuration()
    }

    useConfigMan(): PheidippidesAppBuilder {
        this.configuration.initializeConfigMan()
        return this
    }

    useHost(host: string): PheidippidesAppBuilder {
        this.host = host
        return this
    }

    usePort(port: number): PheidippidesAppBuilder {
        this.port = port
        return this
    }

    async build(): Promise<PheidippidesApp> {
        await this.configuration.ready
        return new PheidippidesApp(this.host ?? this.configuration.host, this.port ?? this.configuration.port, this.configuration)
    }
}
