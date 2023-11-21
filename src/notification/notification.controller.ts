import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload, Transport } from '@nestjs/microservices';
// import { OtpMsg, SignupByOtp, USER_SIGNUP_PACKAGE_PACKAGE_NAME } from './GRPC/user';
// import { SendOtpDto } from './dto/notification.dto';
import { OtpSignupService } from './notification.service';
import { KafkaNotificationService } from './sendNotification/kafkaNotification';
// import { OtpMsg, SignupByOtp } from './GRPC/';.
// import {SignupByOtp,OtpMsg} from './interface/interface'

@Controller('notification')
export class OtpSignupController{
    constructor(private readonly otpSignupService: OtpSignupService,
      private readonly sendNotificationService: KafkaNotificationService) {}
    
    @GrpcMethod('OtpSignup', 'sendOtp')
    async sendOtp(data: 'SignupByOtp'): Promise<any> {
      return this.otpSignupService.sendOtp(data);
    }


    @MessagePattern('new-movie-topic',Transport.KAFKA) 
     getHello(@Payload() message) {
      console.log(message)
    return this.sendNotificationService.sendMovieNotification(message)
  }

  @GrpcMethod('OtpSignup', 'sendEmail')
    async sendEmail(data: 'SendUsersEmail'): Promise<any> {
      // return this.otpSignupService.sendOtp(data);
      console.log(data)
      
      return { NotificationMsg: 'EMAIL' };
    }
  }