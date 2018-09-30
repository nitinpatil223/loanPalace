import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import * as CryptoJS from 'crypto-js';
import { ContactUs } from '../Model/ContactUs';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private _http: HttpClient) { }
  public sendEmail (contactusEncrypted: ContactUs) {
    var model ={
      name:contactusEncrypted.name,
      subject:contactusEncrypted.subject,
      email:contactusEncrypted.email,
      message:contactusEncrypted.message
    }
    return this._http.post(environment.apiUrl + 'Account/SendEmail',model).subscribe();//.map(x => x.json());
  }

  public getEncryptedValue(model : string){
    
    // const key = CryptoJS.enc.Base64.parse("2811da22377d62fcfdb02f29aad77d9e");
    // const iv  = CryptoJS.enc.Base64.parse("2811da22377d62fcfdb02f29aad77d9e");
   
    // let encrypted = CryptoJS.AES.encrypt(model, key, { mode: CryptoJS.mode.ECB,
    //   padding: CryptoJS.pad.NoPadding},).toString();

    var key = CryptoJS.enc.Utf8.parse('8080808080808080');  
    var iv = CryptoJS.enc.Utf8.parse('8080808080808080');  
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
