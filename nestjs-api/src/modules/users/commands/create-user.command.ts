import { ICommand } from '@nestjs/cqrs';
import { CreateUserRequestDto } from '@src/modules/users/dtos/create-user-request.dto';

export class CreateUserCommand implements ICommand {
  constructor(public createUserRequestDto: CreateUserRequestDto) {}
}
