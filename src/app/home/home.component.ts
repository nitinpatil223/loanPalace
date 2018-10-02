import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { ContactUs } from '../Model/ContactUs';
import { SendEmailService } from '../contact/send-email.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 
  contactus = new ContactUs();
  contactusEncrypted = new ContactUs();
  sucessMessage:boolean=false;
  nameError:boolean=false;
  messageError:boolean=false;
  emailError:boolean=false;
  mobilenoError:boolean=false;
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private _service : SendEmailService) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'home-body');
    $('html,body').animate({
      scrollTop: 0}
     );
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'home-body');
  }
  sendMessage = function(){
    if(this.validateField())
    {
    this.contactusEncrypted.name = this._service.getEncryptedValue(this.contactus.name);
    this.contactusEncrypted.email = this._service.getEncryptedValue(this.contactus.email);
    this.contactusEncrypted.mobilenumber = this._service.getEncryptedValue(this.contactus.mobilenumber);
    this._service.sendEmail(this.contactusEncrypted);
    this.sucessMessage=true;
    this.contactus.name=null;
    this.contactus.email=null;
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

    if(this.nameError == true|| this.emailError == true || this.mobilenoError == true){
      return false;
    }
    else
    {
      return true;
    }
    
  }
}
