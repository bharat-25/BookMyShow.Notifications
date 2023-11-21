import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
// import { OtpMsg, SignupByOtp } from './GRPC/';


@Injectable()
export class OtpSignupService {
    private transporter: nodemailer.Transporter;
  
    constructor(){
        this.transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user:'bharatannd2000@gmail.com',
            pass: 'amfosrpkxlhzzuaz',
          },
        });
}

async sendOtp(data: any) {
    // const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
    console.log(data)
    const msg: any = {
      msg: `Your OTP is: ${data.OTP}`,
    };
  
    try {
    console.log(data)

        await this.transporter.sendMail({
          from: 'bharatannd2000@gmail.com',
          to: data.emailAddress,
          subject: 'OTP Confirmation',
          text: `Your OTP is: ${data.OTP}`,
        });
    return { msg: 'OTP sent to your email' };
  }
  catch (error) {
    // Handle nodemailer errors, maybe log or perform some fallback logic
    console.error('Failed to send OTP:', error);
    throw new Error('Failed to send OTP');
  }
}



}
