import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload, Transport } from '@nestjs/microservices';
// import { OtpMsg, SignupByOtp, USER_SIGNUP_PACKAGE_PACKAGE_NAME } from './GRPC/user';
// import { SendOtpDto } from './dto/notification.dto';
import { OtpSignupService } from './notification.service';
// import { KafkaNotificationService } from './sendNotification/kafkaNotification';
// import { OtpMsg, SignupByOtp } from './GRPC/';.
// import {SignupByOtp,OtpMsg} from './interface/interface'

@Controller('notification')
export class OtpSignupController{
    constructor(private readonly otpSignupService: OtpSignupService,
      ) {}
    
  
  /**
 * gRPC method to send an OTP for signup.
 * @param {'SignupByOtp'} data - The data for OTP signup.
 * @returns {Promise<any>} - A promise that resolves to the result of sending the OTP.
 */
    @GrpcMethod('OtpSignup', 'sendOtp')
    async sendOtp(data: 'SignupByOtp'): Promise<any> {
      return this.otpSignupService.sendOtp(data);
    }

/**
 * Kafka message pattern to handle new movie topics.
 * @param {any} message - The message received from the Kafka topic.
 * @returns {Promise<void>} - A promise that resolves after handling the movie notification.
 */
    @MessagePattern('new-movie-topic',Transport.KAFKA) 
     getHello(@Payload() message) {
      console.log(message)
    return this.otpSignupService.sendMovieNotification(message)
  }


/**
 * gRPC method to send an email.
 * @param {'SendUsersEmail'} data - The data for sending email.
 * @returns {Promise<{ NotificationMsg: 'SendUsersEmail' }>} - A promise that resolves to the notification message.
 */
  @GrpcMethod('OtpSignup', 'sendEmail')
    async sendEmail(data: 'SendUsersEmail'){
      console.log(data)
      return { NotificationMsg: data };
    }
    
  }