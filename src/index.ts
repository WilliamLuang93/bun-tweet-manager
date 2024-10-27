import { Elysia } from 'elysia'
import { cqrs } from 'elysia-cqrs'
import { GetTweetController } from './tweet-management/application/feature/get-tweets/get-tweets.controller'
import { CreateOneController } from './tweet-management/application/feature/create-one/create-one.controller'
import { CreateOneCommand } from './tweet-management/application/feature/create-one/create-one.command'
import { CreateOneCommandHandler } from './tweet-management/application/feature/create-one/create-one.command-handler'
import { GetTweetsQueryHandler } from './tweet-management/application/feature/get-tweets/get-tweets.query-handler'
import { GetTweetsQuery } from './tweet-management/application/feature/get-tweets/get-tweets.query'

const app = new Elysia()
  .use(
    cqrs({
      commands: [[CreateOneCommand, new CreateOneCommandHandler()]],
      queries: [[GetTweetsQuery, new GetTweetsQueryHandler()]]
    })
  )
  .use(GetTweetController)
  .use(CreateOneController)
  .listen(3000)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
)
