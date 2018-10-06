import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import * as CryptoJS from 'crypto-js';
import { ContactUs, RefferEarn, EnquiryWithSbiOrHdfc } from '../Model/ContactUs';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private _http: HttpClient) { }
  public sendEmail (contactusEncrypted: ContactUs) {
    return this._http.post(environment.apiUrl + 'Account/SendEmail',contactusEncrypted).subscribe();//.map(x => x.json());
  }

  public sendEmailEnquiry (enquirywithEncrpted: EnquiryWithSbiOrHdfc) {
    return this._http.post(environment.apiUrl + 'Account/sendEmailEnquiry',enquirywithEncrpted).subscribe();//.map(x => x.json());
  }

  public sendEmailForRefferAndEarn (refferearnEncrypted: RefferEarn) {
    return this._http.post(environment.apiUrl + 'Account/sendEmailForRefferAndEarn',refferearnEncrypted).subscribe();//.map(x => x.json());
  }

  public getEncryptedValue(model : string){
    var key = CryptoJS.enc.Utf8.parse('1234567896547896');  
    var iv = CryptoJS.enc.Utf8.parse('1234567896547896');  
    var encryptedlogin = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(model), key,  
{  
   keySize: 128 / 8,  
   iv: iv,  
   mode: CryptoJS.mode.CBC,  
   padding: CryptoJS.pad.Pkcs7  
});   

    return encryptedlogin.toString();
  }
 
  
}
