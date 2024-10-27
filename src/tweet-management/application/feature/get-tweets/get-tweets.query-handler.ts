import type { IQueryHandler } from 'elysia-cqrs'
import type { GetTweetsQuery } from './get-tweets.query'

export class GetTweetsQueryHandler
  implements IQueryHandler<GetTweetsQuery, string>
{
  execute(query: GetTweetsQuery) {
    return `Fetch tweets named: ${query.name}`
  }
}
