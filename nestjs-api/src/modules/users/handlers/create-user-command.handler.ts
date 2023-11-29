import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '@src/modules/users/commands/create-user.command';
import { UsersRepository } from '@src/modules/users/repositories/users.repository';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { CreateUserRequestDto } from '@src/modules/users/dtos/create-user-request.dto';
import { User } from '@src/domain/entities/user.entity';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private usersRepository: UsersRepository,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async execute(command: CreateUserCommand): Promise<any> {
    const user = this.mapper.map(
      command.createUserRequestDto,
      CreateUserRequestDto,
      User,
    );
    return await this.usersRepository.insert(user);
  }
}
