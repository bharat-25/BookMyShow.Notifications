// /* eslint-disable */
// import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
// import { Observable } from "rxjs";

// export const protobufPackage = "UserSignupPackage";

// export interface SignupByOtp {
//   getMessage(): unknown;
//   OTP: number;
//   emailAddress: string;
// }

// export interface OtpMsg {
//   msg: string;
// }

// export const USER_SIGNUP_PACKAGE_PACKAGE_NAME = "UserSignupPackage";

// export interface OtpSignupClient {
//   sendOtp(request: SignupByOtp): Observable<OtpMsg>;
// }

// export interface OtpSignupController {
//   sendOtp(request: SignupByOtp): Promise<OtpMsg> | Observable<OtpMsg> | OtpMsg;
// }

// export function OtpSignupControllerMethods() {
//   return function (constructor: Function) {
//     const grpcMethods: string[] = ["sendOtp"];
//     for (const method of grpcMethods) {
//       const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
//       GrpcMethod("OtpSignup", method)(constructor.prototype[method], method, descriptor);
//     }
//     const grpcStreamMethods: string[] = [];
//     for (const method of grpcStreamMethods) {
//       const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
//       GrpcStreamMethod("OtpSignup", method)(constructor.prototype[method], method, descriptor);
//     }
//   };
// }

// export const OTP_SIGNUP_SERVICE_NAME = "OtpSignup";
