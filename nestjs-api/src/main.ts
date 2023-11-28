import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import swaggerConfig from './infrastructure/configuration/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const appPort = configService.get<number>('app.appPort');
  const apiPrefix = configService.get<string>('app.appPrefix');

  if (configService.get('app.nodeEnv') === 'development') {
    swaggerConfig(app);
  }

  app.setGlobalPrefix(apiPrefix);
  await app.listen(appPort).then(() => {
    console.log(`API-Gateway is running on port ${appPort}`);
  });
}
bootstrap();
