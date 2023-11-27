// import { Controller, Injectable } from '@nestjs/common';
// import * as nodemailer from 'nodemailer';
// import { ClientGrpc, GrpcMethod, MessagePattern, Payload, Transport } from '@nestjs/microservices';
// import { OtpSignup } from '../interface/interface';

// @Controller()
// export class KafkaNotificationService  {
//   private transporter: nodemailer.Transporter;
//   private svc: OtpSignup;
//   private readonly client: ClientGrpc;

//     constructor(){
//         this.transporter = nodemailer.createTransport({
//           service: 'gmail',
//           auth: {
//             user:'bharatannd2000@gmail.com',
//             pass: 'amfosrpkxlhzzuaz',
//           },
//         })
// }


// public onModuleInit(): void {
//   this.svc = this.client.getService<OtpSignup>('OtpSignup');
// }
//   async sendMovieNotification(data: any) {
//     console.log(data)
//     const msg: any = {
//       msg: `We're thrilled to share the latest updates from BookMyShow. Our team has just added some fantastic new movies to our collection, and we can't wait for you to discover them! Whether you're a fan of action, drama, comedy, or romance, we've got something special for everyone.: ${data.name}`,
//     };
  
//     try {
//     console.log(data)
//     const mailMsg = this.svc.recieveEmails();
//        let UsersEmail
//         mailMsg.subscribe((response) => {
//           console.log('result----->>>>', response);
//           UsersEmail=response
//         });

//         await this.transporter.sendMail({
//           from: 'bharatannd2000@gmail.com',
//           to: UsersEmail,
//           subject: 'Exciting News! New Movies Added to BookMyShow',
//           text: `We're thrilled to share the latest updates from BookMyShow. Our team has just added some fantastic new movies to our collection, and we can't wait for you to discover them! Whether you're a fan of action, drama, comedy, or romance, we've got something special for everyone.${data.name}`,
//         });
//     return { msg: 'Notification sent to all users email' };
//   }
//   catch (error) {
//     console.error('Failed to send Notification:', error);
//     throw new Error('Failed to send Notification');
//   }
// }


// // async listen(): Promise<void> {
// //     await this.consumer.connect();
// //     await this.consumer.subscribe({ topic: /^new-movie-topic-.+/ });

// //     await this.consumer.run({
// //       eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
// //         // Handle the new movie notification
// //         try {
// //             console.log(message)
        
// //                 await this.transporter.sendMail({
// //                   from: 'bharatannd2000@gmail.com',
// //                   to: data.emailAddress,
// //                   subject: 'Exciting News! New Movies Added to BookMyShow',
// //                   text: `We're thrilled to share the latest updates from BookMyShow. Our team has just added some fantastic new movies to our collection, and we can't wait for you to discover them! Whether you're a fan of action, drama, comedy, or romance, we've got something special for everyone.${message}`,
// //                 });
// //             console.log(`Received new movie notification: ${message.value}`);
// //             return { msg: 'Notification sent to all users email' };
// //           }
// //           catch (error) {
// //             console.error('Failed to send Notification:', error);
// //             throw new Error('Failed to send Notification');
// //           }
// //       },
// //     });
// //   }

// // constructor() {
// //     this.consumer = new Kafka({
// //       clientId: 'notification-service',
// //       brokers: ['localhost:9092'],
// //     }).consumer({ groupId: 'notification-group' });
// //   }

// //   async sendEmail(userEmails: string[], movieNotification: string): Promise<void> {
// //     const transporter = nodemailer.createTransport({
// //                 service: 'gmail',
// //                 auth: {
// //                     user:'bharatannd2000@gmail.com',
// //                     pass: 'amfosrpkxlhzzuaz',
// //                 },
// //     });

// //     const mailOptions = {
// //       from: 'bharatannd2000@example.com',
// //       to: userEmails.join(','), 
// //       subject: 'Exciting News! New Movies Notification',
// //       text: movieNotification,
// //     };

// //     await transporter.sendMail(mailOptions);
// //   }

// //   async listen(): Promise<void> {
// //     await this.consumer.connect();

// //     // Update this line to subscribe to user-specific topics
// //     await this.consumer.subscribe({ topic: /^new-movie-topic-.+/ });

// //     await this.consumer.run({
// //       eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
// //         // Extract user email from the topic
// //         const userEmail = topic.split('-').pop();

// //         // Handle the new movie notification
// //         const movieNotification = `Received new movie notification for user ${userEmail}: ${message.value}`;

// //         // Send email to the user
// //         await this.sendEmail([userEmail], movieNotification);
// //       },
// //     });
// //   }
// }