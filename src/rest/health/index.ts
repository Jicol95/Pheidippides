import { Handler } from "express"
import moment from "moment"
import { Endpoint } from "../../app/pheidippides-server"
import { HealthMetrics } from "./dto/health-metrics"

const healthHandler: Handler = (req, res) => {
    res.status(200)
    res.send({
        healthy: true,
        time: moment.utc()
    } as HealthMetrics)
}

export default {
    httpVerb: 'post',
    route: '/rest/v1/sms',
    handler: healthHandler
} as Endpoint