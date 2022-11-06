import { PheidippidesServer } from '../pheidippides-server'
import { Configuration } from '../configuration'
import { router } from '../../core/decorators/controller';

export class PheidippidesAppBuilder {
    constructor(private config: Configuration) {}
    public static inject = ['config'] as const;

    private host: string = 'localhost'
    private port: number = 8080
    private usingConfigMan: boolean = false
    private baseUrl: string = ''

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

    useBaseUrl(baseUrl: string): PheidippidesAppBuilder {
        this.baseUrl = baseUrl
        return this
    }

    async build(): Promise<PheidippidesServer> {
        if (this.usingConfigMan) {
            await this.config.ready
            return new PheidippidesServer(this.config.host ?? this.host, this.config.port ?? this.port, router, this.baseUrl)
        }

        return new PheidippidesServer(this.host, this.port, router, this.baseUrl)
    }
}
