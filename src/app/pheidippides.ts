import '../rest/health-resource'
import "../rest/v1/resources/sms-resource"
import { PheidippidesAppBuilder } from './builder/pheidippides-app-builder';
import { appInjector } from './app-injector';

export class Pheidippides {
    public async run() {
        const builder = appInjector.injectClass(PheidippidesAppBuilder)
        
        const server = await builder
            .useConfigMan()
            .useBaseUrl('/rest')
            .build()

        await server.listen()
    }
}