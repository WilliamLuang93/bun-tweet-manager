import type { ICommandHandler } from 'elysia-cqrs'
import type { CreateOneCommand } from './create-one.command'

export class CreateOneCommandHandler
  implements ICommandHandler<CreateOneCommand, string>
{
  execute(command: CreateOneCommand) {
    return `Create one tweet named: ${command.name}`
  }
}
