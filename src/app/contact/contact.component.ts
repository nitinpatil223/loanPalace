import { Component, OnInit } from '@angular/core';
import { ContactUs } from '../Model/ContactUs';
import { SendEmailService } from './send-email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactus = new ContactUs();
  contactusEncrypted = new ContactUs();
  constructor(private _service : SendEmailService) { }
  
  ngOnInit() {
  }

  sendMessage = function(){
    debugger;
    this.contactusEncrypted.name = this._service.getEncryptedValue(this.contactus.name);
    this.contactusEncrypted.subject = this._service.getEncryptedValue(this.contactus.subject);
    this.contactusEncrypted.email = this._service.getEncryptedValue(this.contactus.email);
    this.contactusEncrypted.message = this._service.getEncryptedValue(this.contactus.message);
    return this._service.sendEmail(this.contactus);
  }
}
