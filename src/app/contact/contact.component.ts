import { Component, OnInit } from '@angular/core';
import { ContactUs } from '../Model/ContactUs';
import { SendEmailService } from './send-email.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactus = new ContactUs();
  contactusEncrypted = new ContactUs();
  sucessMessage:boolean=false;
  nameError:boolean=false;
  messageError:boolean=false;
  emailError:boolean=false;
  mobilenoError:boolean=false;
  constructor(private _service : SendEmailService) { }
  
  ngOnInit() {
    $('html,body').animate({
      scrollTop: 0}
     );
  }

  sendMessage = function(){
    if(this.validateField())
    {
      debugger;
    this.contactusEncrypted.name = this._service.getEncryptedValue(this.contactus.name);
    this.contactusEncrypted.email = this._service.getEncryptedValue(this.contactus.email);
    this.contactusEncrypted.message = this._service.getEncryptedValue(this.contactus.message);
    this.contactusEncrypted.mobilenumber = this._service.getEncryptedValue(this.contactus.mobilenumber);
    this._service.sendEmail(this.contactusEncrypted);
    this.sucessMessage=true;
    this.contactus.name=null;
    this.contactus.subject=null;
    this.contactus.email=null;
    this.contactus.message=null;
    this.contactus.mobilenumber=null;
    return;
    }
  }

  validateField= function()
  {
    debugger;
    this.sucessMessage=false;
    if(this.contactus.name != undefined && this.contactus.name != null && this.contactus.name !="")
    {
      this.nameError = false;
    }
    else
    {
      this.nameError = true;
    }

    if(this.contactus.message != undefined && this.contactus.message != null && this.contactus.message !="")
    {
      this.messageError = false;
    }
    else
    {
      this.messageError = true;
    }

    if(this.contactus.email != undefined && this.contactus.email != null && this.contactus.email !="")
    {
      this.emailError = false;
    }
    else
    {
      this.emailError = true;
    }

    if(this.contactus.mobilenumber != undefined && this.contactus.mobilenumber != null && this.contactus.mobilenumber !="")
    {
      this.mobilenoError = false;
    }
    else
    {
      this.mobilenoError = true;
    }

    if(this.nameError == true || this.messageError == true || this.emailError == true || this.mobilenoError == true){
      return false;
    }
    else
    {
      return true;
    }
    
  }
}
