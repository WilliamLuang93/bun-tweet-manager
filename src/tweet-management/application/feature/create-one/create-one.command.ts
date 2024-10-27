import { ICommand } from 'elysia-cqrs'

export class CreateOneCommand extends ICommand {
  constructor(public name: string) {
    super()
  }
}
