import { Handler } from "express"
import * as moment from 'moment'
import { Endpoint } from "../../../app/pheidippides-server"
import { HealthMetrics } from "../../dto/health-metrics"

const healthHandler: Handler = (_, res) => {
    res.send({
        healthy: true,
        time: moment.utc()
    } as HealthMetrics)
}

export default {
    httpVerb: 'get',
    route: '/rest/health',
    handler: healthHandler
} as Endpoint