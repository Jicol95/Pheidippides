import { Endpoint, PheidippidesServer } from '../pheidippides-server'
import { Configuration } from '../../configuration'

export class PheidippidesAppBuilder {
    constructor(private config: Configuration) {}
    public static inject = ['config'] as const;

    private host: string | undefined
    private port: number
    private usingConfigMan: boolean = false
    private endpoints: Endpoint[] = []

    useConfigMan(): PheidippidesAppBuilder {
        this.usingConfigMan = true
        this.config.initializeConfigMan()
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

    useEndpoint(endpoint: Endpoint) {
        this.endpoints.push(endpoint)
        return this
    }

    async build(): Promise<PheidippidesServer> {
       if (this.usingConfigMan) {
           await this.config.ready
           return new PheidippidesServer(this.host ?? this.config.host, this.port ?? this.config.port, this.endpoints)
       }

        return new PheidippidesServer(this.host ?? 'localhost', this.port ?? 8080, this.endpoints)
    }
}
