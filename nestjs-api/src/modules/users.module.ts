import { Module } from '@nestjs/common';
import { UserMappingProfile } from '@src/modules/users/user-mapping.profile';
import { UsersRepository } from '@src/modules/users/repositories/users.repository';
import { UsersController } from '@src/modules/users/controllers/users.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserCommandHandler } from '@src/modules/users/handlers/create-user-command.handler';

export const CommandHandlers = [CreateUserCommandHandler];

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [UserMappingProfile, UsersRepository, ...CommandHandlers],
})
export class UsersModule {}
