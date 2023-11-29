import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UserDto } from '@src/modules/users/dtos/user.dto';
import { CreateUserCommand } from '@src/modules/users/commands/create-user.command';
import { CreateUserRequestDto } from '@src/modules/users/dtos/create-user-request.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private commandBus: CommandBus) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Create a new user',
    description: 'This method create a new user',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Create new user',
    type: UserDto,
  })
  async createUser(@Body() createUserRequestDto: CreateUserRequestDto) {
    return this.commandBus.execute(new CreateUserCommand(createUserRequestDto));
  }
}
