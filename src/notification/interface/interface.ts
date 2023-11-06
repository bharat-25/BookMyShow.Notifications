import { Observable } from "rxjs";

export interface SignupByOtp{
    OTP: number,
    emailAddress:string 

}
export interface OtpMsg{
    msg:string

}
export interface OtpSignup{
    sendOTP(data: {OTP: number,emailAddress:string }): Observable<any>
}