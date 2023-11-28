import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentValidator } from './environment.validator';
import AppConfig from './app.config';
import DatabaseConfig from './database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: process.env.NODE_ENV === 'production',
      expandVariables: true,
      envFilePath: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
      load: [AppConfig, DatabaseConfig],
      validate: environmentValidator,
    }),
  ],
})
export class ConfigurationModule {}
