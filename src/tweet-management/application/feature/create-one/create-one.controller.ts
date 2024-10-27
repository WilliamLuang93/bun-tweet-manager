import { Elysia } from 'elysia'
import { CreateOneCommand } from './create-one.command'

interface CommandParams {
  body: {
    name: string
  }

  commandMediator: {
    send: (command: CreateOneCommand) => Promise<string>
  }
}

export const CreateOneController = new Elysia({ prefix: '/tweets' }).post(
  '/create-one',
  async ({ body: { name }, commandMediator }: CommandParams) => {
    const createCommand = new CreateOneCommand(name)

    return commandMediator.send(createCommand)
  }
)
