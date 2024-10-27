import { IQuery } from 'elysia-cqrs'

export class GetTweetsQuery extends IQuery {
  constructor(public name: string) {
    super()
  }
}
