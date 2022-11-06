import { Router } from "express";
import { createInjector, Injector, Scope } from "typed-inject";
import { Configuration } from "./configuration";
import { router } from "../core/decorators/controller";
import { HealthResource } from "../rest/health-resource";
import { PheidippidesAppBuilder } from "./builder/pheidippides-app-builder";

export const appInjector: Injector<{config: Configuration, "app-builder": PheidippidesAppBuilder, router: Router}> = createInjector()
    .provideClass('config', Configuration, Scope.Singleton)
    .provideValue('router', router)
    .provideClass('app-builder', PheidippidesAppBuilder, Scope.Singleton)
    .provideClass('health-resource', HealthResource)