import { Router } from "express";
import 'reflect-metadata'
import { ResourceEndpoint } from "../resource-endpoint";
import { appInjector } from "../../app/app-injector";

export const router = Router()

export const Controller = (prefix: string): ClassDecorator => {
    return (target: any) => {
        Reflect.defineMetadata('prefix', prefix, target);
        if (!Reflect.hasMetadata('routes', target)) {
            Reflect.defineMetadata('routes', [], target);
        }
        const routes: Array<ResourceEndpoint> = Reflect.getMetadata('routes', target)
        const instance: any = appInjector.injectClass(target)
        routes.forEach((route: ResourceEndpoint) => {
            console.debug('Registered route ', { path: `${prefix}${route.path}`, method: route.methodName, controller: target.name })
            router[route.httpVerb](`${prefix}${route.path}`, instance[route.methodName].bind(instance))
        })
    }
}