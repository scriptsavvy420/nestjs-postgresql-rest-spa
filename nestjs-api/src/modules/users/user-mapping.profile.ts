import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  ignore,
  Mapper,
  MappingProfile,
} from '@automapper/core';
import { User } from '@src/domain/entities/user.entity';
import { CreateUserRequestDto } from '@src/modules/users/dtos/create-user-request.dto';
import { UserDto } from '@src/modules/users/dtos/user.dto';

@Injectable()
export class UserMappingProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, User, UserDto);
      createMap(
        mapper,
        CreateUserRequestDto,
        User,
        forMember((user) => user.id, ignore()),
      );
    };
  }
}
