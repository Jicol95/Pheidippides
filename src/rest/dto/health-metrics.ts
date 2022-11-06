import * as moment from 'moment'

export interface HealthMetrics {
    healthy: boolean,
    time: moment.Moment
}