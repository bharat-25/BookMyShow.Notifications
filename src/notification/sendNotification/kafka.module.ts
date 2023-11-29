// import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { OtpSignup } from '../interface/interface';
// import { KafkaNotificationService } from './kafkaNotification';
// import { join } from 'path';

// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: 'MOVIES',
//         transport: Transport.GRPC,
//         options: {
//           url: '127.0.0.1:50051',
//           package: 'UserSignupPackage',
//           protoPath:  join(__dirname, '../GRPC/user.proto'),
//         },
//       },
//     ]),
//   ],
//   controllers: [KafkaNotificationService], 
//   providers: [],
// })
// export class SendNotificationModule {}
