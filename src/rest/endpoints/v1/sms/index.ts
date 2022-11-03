import { Handler } from "express"
import { Endpoint } from "../../../../app"

const smsHandler: Handler = (req, res) => {
    res.status(200)
    res.send({
        message: 'bleep bloop sent a text'
    })
}

export default {
    httpVerb: 'post',
    route: '/rest/v1/sms',
    handler: smsHandler
} as Endpoint