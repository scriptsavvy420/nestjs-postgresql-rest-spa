import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { UsersModule } from '@src/modules/users.module';

@Module({
  imports: [InfrastructureModule, UsersModule],
})
export class AppModule {}
