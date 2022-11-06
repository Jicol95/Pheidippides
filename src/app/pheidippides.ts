import express, { Express, Handler } from 'express'
import { createInjector, Injector, Scope } from 'typed-inject';
import { Configuration } from '../configuration';
import { PheidippidesAppBuilder } from './builder';
import healthEndpoint from '../rest/endpoints/health'
import smsEndpoint from '../rest/endpoints/v1/sms'

export class Pheidippides {
    private appInjector: Injector<{config: Configuration, "app-builder": PheidippidesAppBuilder}>;

    constructor() {
        this.configure()
    }

    public async run() {
        const builder = this.appInjector.injectClass(PheidippidesAppBuilder)
        
        const server = await builder
            .useEndpoint(healthEndpoint)
            .useEndpoint(smsEndpoint)
            .useConfigMan()
            .build()

            
        await server.listen()
    }

    private configure() {
        this.appInjector = createInjector()
            .provideClass('config', Configuration, Scope.Singleton)
            .provideClass('app-builder', PheidippidesAppBuilder, Scope.Singleton)
    }
}