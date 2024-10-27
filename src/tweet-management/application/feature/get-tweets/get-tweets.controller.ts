import { Elysia } from 'elysia'
import { GetTweetsQuery } from './get-tweets.query'

interface QueryParams {
  query: {
    name: string
  }

  queryMediator: {
    send: (query: GetTweetsQuery) => Promise<string>
  }
}

export const GetTweetController = new Elysia({ prefix: '/tweets' }).get(
  '/get-all',
  async ({ query: { name }, queryMediator }: QueryParams) => {
    const getQuery = new GetTweetsQuery(name)

    return queryMediator.send(getQuery)
  }
)
