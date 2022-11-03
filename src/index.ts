import { PheidippidesAppBuilder } from './app/builder'
import healthEndpoint from './rest/endpoints/health'
import smsEndpoint from './rest/endpoints/v1/sms'

const main = async () => {
  const builder = new PheidippidesAppBuilder()
  const app = await builder.useConfigMan()
    .usePort(8082) 
    .build()
    
  app.createEndpoint(healthEndpoint)
  app.createEndpoint(smsEndpoint)
  await app.listen()  
}

main().catch((err) => console.log(err))


