import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  appPort: parseInt(process.env.APP_PORT) || 5000,
  appName: process.env.APP_NAME || 'BGVTRIAJA',
  appPrefix: process.env.APP_PREFIX || 'api',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:4200',
  backendUrl: process.env.BACKEND_URL || 'http://localhost:5000',
  perPage: 15,
}));
