import { Module } from '@nestjs/common';
import { OtpSignupService } from './notification.service';
import { OtpSignupController } from './notification.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
// import { KafkaNotificationService } from './sendNotification/kafkaNotification';
// import { SendNotificationModule } from './sendNotification/kafka.module';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'NOTIFICATION',
    //     transport: Transport.GRPC,
    //     options: {
    //       url: '127.0.0.1:50051',
    //       package: 'UserSignupPackage',
    //       protoPath: join(__dirname, './GRPC/user.proto'),
    //     },
    //   },
    // ]),
  ],
  providers: [OtpSignupService],
  controllers: [OtpSignupController,
  ],
  exports: [OtpSignupService]

})
export class NotificationModule {}
