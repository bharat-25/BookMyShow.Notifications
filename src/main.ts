import { ClientsModule, MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microserviceGRPC = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
        url: '127.0.0.1:50051',
        package: 'UserSignupPackage',
        protoPath: join(__dirname, './notification/GRPC/user.proto'),
    },
  });
 

  const microserviceKAFKA = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
              brokers: ['localhost:9092'],
            },
            consumer: {
              groupId: 'user-consumer',
            },
    },
  });
  
  ConfigModule.forRoot(),
  app.useGlobalPipes(new ValidationPipe());
  await app.startAllMicroservices();
  await app.listen(3009);
}
bootstrap();

// transport: [
//   {
//     type: Transport.GRPC,
//     options: {
//       url: '127.0.0.1:50051',
//       package: 'UserSignupPackage',
//       protoPath: join(__dirname, './notification/GRPC/user.proto'),
//     },
//   },
//   {
//     type: Transport.KAFKA,
//     options: {
//       client: {
//         brokers: ['localhost:9092'],
//       },
//       consumer: {
//         groupId: 'user-consumer',
//       },
//     },
//   },
// ],
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// // import { protobufPackage } from './notification/GRPC/user';
// import { join } from 'path';
// // import { KafkaNotificationService } from './notification/sendNotification/kafkaNotification';

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice(
//     <MicroserviceOptions>AppModule,
//     {
//       transport: Transport.GRPC,
//       options: {
//         url: '127.0.0.1:50051',
//         package: 'UserSignupPackage',
//         protoPath: join(__dirname, './notification/GRPC/user.proto'),
//       },
//     },
//   );
//   // {
//   //   type: Transport.KAFKA,
//   //   options: {
//   //     client: {
//   //       brokers: ['localhost:9092'],
//   //     },
//   //     consumer: {
//   //       groupId: 'user-consumer',
//   //     },
//   //   },
//   // },

//   // const server = new KafkaServer({
//   //   client: 'localhost:9092',
//   //   options: {
//   //     groupId: 'user-consumer',
//   //     // id: "kafka-server",
//   //   },
//   // });

//   app.useGlobalPipes(new ValidationPipe());
//   await app.listen();
// }
// bootstrap();
