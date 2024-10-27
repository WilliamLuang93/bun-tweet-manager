import { Elysia } from 'elysia'
import { cqrs } from 'elysia-cqrs'
import { GetTweetsQuery } from './get-tweets.query'
import { GetTweetsQueryHandler } from './get-tweets.query-handler'

interface QueryParams {
  query: {
    name: string
  }

  queryMediator: {
    send: (query: GetTweetsQuery) => Promise<any>
  }
}

export const GetTweetController = new Elysia({ prefix: '/tweets' })
  .use(
    cqrs({
      queries: [[GetTweetsQuery, new GetTweetsQueryHandler()]]
    })
  )
  .get('/get-all', async ({ query: { name }, queryMediator }: QueryParams) => {
    const nQuery = new GetTweetsQuery(name)

    return queryMediator.send(nQuery)
  })
  .listen(3000)
