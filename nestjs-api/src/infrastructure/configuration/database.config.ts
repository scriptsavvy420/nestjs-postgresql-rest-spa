import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [__dirname + '/../../domain/entities/*.entity{.ts,.js}'],
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
  timezone: 'Z',
  debug: false,
  logging: process.env.TYPEORM_LOGGING,
}));
