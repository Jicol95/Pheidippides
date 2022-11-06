import { Request, Response } from "express";
import moment from "moment";
import { Controller } from "../core/decorators/controller";
import { Get } from "../core/decorators/router";
import { HealthMetrics } from "./dto/health-metrics";

@Controller('/health')
export class HealthResource {
    @Get()
    public getHealthStatus(_: Request, res: Response) {
        res.send({
            healthy: true,
            time: moment.utc(),
        } as HealthMetrics)
    }
}