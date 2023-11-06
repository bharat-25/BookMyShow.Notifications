import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
// import { OtpMsg, SignupByOtp, USER_SIGNUP_PACKAGE_PACKAGE_NAME } from './GRPC/user';
// import { SendOtpDto } from './dto/notification.dto';
import { OtpSignupService } from './notification.service';
// import { OtpMsg, SignupByOtp } from './GRPC/';.
// import {SignupByOtp,OtpMsg} from './interface/interface'

@Controller('notification')
export class OtpSignupController{
    constructor(private readonly otpSignupService: OtpSignupService) {}
    
    @GrpcMethod('OtpSignup', 'sendOtp')
    async sendOtp(data: 'SignupByOtp'): Promise<any> {
      console.log("hiiiiiiiiiii")
      return this.otpSignupService.sendOtp(data);
    }
  }