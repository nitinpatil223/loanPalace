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
    let password = 'juophhdhdusujso4477dfdsfd';
    const key = CryptoJS.enc.Base64.parse(password);
    const iv  = CryptoJS.enc.Base64.parse("e84ad660c4721ae0e84ad660c4721ae0");
    let encrypted = CryptoJS.AES.encrypt(model, key, {iv: iv}).toString();
    return encrypted;
  }
  
}
