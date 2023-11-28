import { IsBoolean, IsNumber, IsString, validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';

class EnvironmentVariables {
  @IsNumber()
  APP_PORT: number;

  @IsString()
  APP_NAME: string;

  @IsString()
  APP_PREFIX: string;

  @IsString()
  FRONTEND_URL: string;

  @IsString()
  BACKEND_URL: string;

  @IsString()
  TYPEORM_CONNECTION: string;

  @IsString()
  TYPEORM_HOST: string;

  @IsString()
  TYPEORM_USERNAME: string;

  @IsString()
  TYPEORM_PASSWORD: string;

  @IsString()
  TYPEORM_DATABASE: string;

  @IsNumber()
  TYPEORM_PORT: number;

  @IsBoolean()
  TYPEORM_SYNCHRONIZE: boolean;

  @IsBoolean()
  TYPEORM_LOGGING: boolean;

  @IsString()
  JWT_TOKEN_SECRET: string;

  @IsString()
  JWT_TOKEN_TYPE: string;

  @IsNumber()
  JWT_ACCESS_TOKEN_EXPIRES_IN_SEC: number;

  @IsNumber()
  JWT_REFRESH_TOKEN_EXPIRES_IN_SEC: number;
}

export function environmentValidator(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
