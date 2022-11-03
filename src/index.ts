import { Pheidippides } from './app/pheidippides'

const main = async () => {
  const app = new Pheidippides()
  await app.run()
}

main().catch((err) => console.log(err))


