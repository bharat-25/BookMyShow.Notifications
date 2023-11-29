import { Inject, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { OtpSignup } from './interface/interface';
import { ClientGrpc, Transport } from '@nestjs/microservices';
import path, { join } from 'path';
import axios from 'axios';
import * as fs from 'fs';
import { EMAIL } from './constant/constant';
import { config } from 'src/config/config';
@Injectable()
export class OtpSignupService {
  private transporter: nodemailer.Transporter;
  private svc: OtpSignup;
  private readonly baseUrl = 'http://localhost:3008';

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.SMTP.AUTH_EMAIL,
        pass: config.SMTP.AUTH_PASSWORD,
      },
    });
  }
  //   @Inject('NOTIFICATION')
  //   private readonly client: ClientGrpc;

  //   public onModuleInit(): void {
  //   this.svc = this.client.getService<OtpSignup>('OtpSignup');
  // }

  async sendOtp(data: any) {
    const msg: any = {
      msg: `Your OTP is: ${data.OTP}`,
    };

    try {
      console.log(data);
      await this.transporter.sendMail({
        from: 'bharatannd2000@gmail.com',
        to: data.emailAddress,
        subject: 'OTP Confirmation',
        text: `Your OTP is: ${data.OTP}`,
      });
      return { msg: 'OTP sent to your email' };
    } catch (error) {
      console.error('Failed to send OTP:', error);
      throw new Error('Failed to send OTP');
    }
  }

  async sendMovieNotification(data: any) {
    try {
      console.log(data);
      // const body:any={}
      // const mailMsg = this.svc.receiveEmails();
      //    let UsersEmail: any
      //     mailMsg.subscribe((response) => {
      //       console.log('result----->>>>', response);
      //     });

      const template = fs.readFileSync(
        join(process.cwd(), 'src', 'template', 'notification.html'),
        'utf-8',
      );

      const Axiosresponse = await axios.get(
        `${this.baseUrl}/users/email-addresses`,
      );
      console.log('------->', Axiosresponse.data);
      const UserEmails = Axiosresponse.data;
      for (const userEmail of UserEmails) {
        await this.transporter.sendMail({
          from: 'bharatannd2000@gmail.com',
          to: userEmail,
          subject: 'Exciting News! New Movies Added to BookMyShow',
          html: template.replace('{{ movieName }}', data.createdMovie.title),
        });
      }
      return { msg: 'Notification sent to all users email' };
    } catch (error) {
      console.error('Failed to send Notification:', error);
      throw new Error('Failed to send Notification');
    }
  }
}
