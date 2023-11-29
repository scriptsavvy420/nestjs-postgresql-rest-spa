import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserRequestDto {
  @AutoMap()
  @ApiProperty({ example: 'Brian' })
  readonly firstName: string;

  @AutoMap()
  @ApiPropertyOptional({ example: 'Milan' })
  readonly middleName?: string;

  @AutoMap()
  @ApiPropertyOptional({ example: 'Harris' })
  readonly lastName?: string;
}
