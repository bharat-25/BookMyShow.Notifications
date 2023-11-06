import { Module } from '@nestjs/common';
import { OtpSignupService } from './notification.service';
import { OtpSignupController } from './notification.controller';

@Module({
  imports: [],
  providers: [OtpSignupService],
  controllers: [OtpSignupController],
  exports: [OtpSignupService]

})
export class NotificationModule {}
