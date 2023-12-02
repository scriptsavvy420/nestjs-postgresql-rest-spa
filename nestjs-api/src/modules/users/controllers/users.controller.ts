import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UserDto } from '@src/modules/users/dtos/user.dto';
import { CreateUserCommand } from '@src/modules/users/commands/create-user.command';
import { CreateUserRequestDto } from '@src/modules/users/dtos/create-user-request.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  /**
   * Creates a new instance of the class.
   *
   * @param {CommandBus} commandBus - The command bus instance to be injected.
   */
  constructor(private commandBus: CommandBus) {}

  /**
   * Create a new user
   *
   * This method creates a new user using the provided user information.
   *
   * @param {CreateUserRequestDto} createUserRequestDto - The user information to create a new user.
   *
   * @returns {Promise<UserDto>} - The created user object.
   */
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
