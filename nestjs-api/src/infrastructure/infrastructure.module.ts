import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
})
export class InfrastructureModule {}
