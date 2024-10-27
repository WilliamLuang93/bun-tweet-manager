import { Elysia } from 'elysia'
import { GetTweetController } from './tweet-management/application/feature/get-tweets/get-tweets.controller'

const app = new Elysia().use(GetTweetController).listen(3000)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
)
