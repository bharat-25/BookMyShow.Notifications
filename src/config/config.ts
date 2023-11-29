import { config as dotenvConfig } from 'dotenv';
import * as path from 'path';

const envFilePath = path.resolve(__dirname, '../../.env');
console.log(envFilePath)
dotenvConfig();

export const config = {
  PORT: process.env.PORT,
  SMTP:{
    AUTH_EMAIL:process.env.AUTH_EMAIL,
    AUTH_PASSWORD:process.env.AUTH_PASSWORD
},
  MONGO: {
    DB_NAME: process.env.DB_NAME,
    DB_URL: process.env.DB_URL,
    OPTIONS: {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
    }}
  }
