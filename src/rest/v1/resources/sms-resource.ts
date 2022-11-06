import { Request, Response } from "express";
import { Controller } from "../../../core/decorators/controller";
import { Get } from "../../../core/decorators/router";

@Controller('/v1/sms')
export class HealthResource {
    @Get()
    public forwardSms(_: Request, res: Response) {
        res.sendStatus(200)
    }
}