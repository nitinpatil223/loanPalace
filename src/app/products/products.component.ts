import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { EnquiryWithSbiOrHdfc } from '../Model/ContactUs';
import { SendEmailService } from '../contact/send-email.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  enquirywith = new EnquiryWithSbiOrHdfc();
  enquirywithEncrpted = new EnquiryWithSbiOrHdfc();
  validateSumbmitButton: boolean = false;

  sucessMessage:boolean=false;
  nameError:boolean=false;
  emailError:boolean=false;
  mobileError:boolean=false;
  amountError:boolean=false;

  constructor(private _service : SendEmailService) { }

  ngOnInit() {
    $('html,body').animate({
      scrollTop: 0}
     );
  }

  sbiScroll = function () {
    $('html,body').animate({
      scrollTop: $("#sbi").offset().top-100},
      'slow');
   }
   hdfcScroll = function () {
    $('html,body').animate({
      scrollTop: $("#hdfc").offset().top-100},
      'slow');
   }

   setType= function(type)
   {
    this.validateSumbmitButton=false;
     if(type==1)
     {
        this.enquirywith.type="1";
     }
     else if(type==2)
     {
        this.enquirywith.type="2";
     }
   }

   sendMessage = function(){
    if(this.validateField())
    {
    this.enquirywithEncrpted.name = this._service.getEncryptedValue(this.enquirywith.name);
    this.enquirywithEncrpted.email = this._service.getEncryptedValue(this.enquirywith.email);
    this.enquirywithEncrpted.mobile = this._service.getEncryptedValue(this.enquirywith.mobile);
    this.enquirywithEncrpted.amount = this._service.getEncryptedValue(this.enquirywith.amount);
    this.enquirywithEncrpted.type = this._service.getEncryptedValue(this.enquirywith.type);
    this._service.sendEmailEnquiry(this.enquirywithEncrpted);
    this.sucessMessage=true;
    this.enquirywith.name=null;
    this.enquirywith.email=null;
    this.enquirywith.mobile=null;
    this.enquirywith.amount=null;
    this.enquirywith.type=null;
    return;
    }
  }


   validateField= function()
  {
    this.sucessMessage=false;
    if(this.enquirywith.name != undefined && this.enquirywith.name != null && this.enquirywith.name !="")
    {
      this.nameError = false;
    }
    else
    {
      this.nameError = true;
    }

    if(this.enquirywith.email != undefined && this.enquirywith.email != null && this.enquirywith.email !="")
    {
      this.emailError = false;
    }
    else
    {
      this.emailError = true;
    }

    if(this.enquirywith.mobile != undefined && this.enquirywith.mobile != null && this.enquirywith.mobile !="")
    {
      this.mobileError = false;
    }
    else
    {
      this.mobileError = true;
    }

    if(this.enquirywith.amount != undefined && this.enquirywith.amount != null && this.enquirywith.amount !="")
    {
      this.amountError = false;
    }
    else
    {
      this.amountError = true;
    }

    if(this.nameError == true|| this.emailError == true || this.mobileError == true || this.amountError == true){
      return false;
    }
    else
    {
      this.validateSumbmitButton = true;
      return true;

    }
    
  }
}
