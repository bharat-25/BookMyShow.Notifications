import { Module } from '@nestjs/common';
import { OtpSignupService } from './notification.service';
import { OtpSignupController } from './notification.controller';
import { KafkaNotificationService } from './sendNotification/kafkaNotification';

@Module({
  imports: [],
  providers: [OtpSignupService,KafkaNotificationService],
  controllers: [OtpSignupController,
    // KafkaNotificationService
  ],
  exports: [OtpSignupService]

})
export class NotificationModule {}
