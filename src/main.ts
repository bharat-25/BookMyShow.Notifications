import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { protobufPackage } from './notification/GRPC/user';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(<MicroserviceOptions>AppModule,{
    transport:Transport.GRPC,
    options:{
      url:'127.0.0.1:50051',
      package:'UserSignupPackage',
      protoPath: join(__dirname,'./notification/GRPC/user.proto')
    }
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}
bootstrap();
