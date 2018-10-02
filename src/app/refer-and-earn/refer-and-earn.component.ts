import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SendEmailService } from '../contact/send-email.service';
import { RefferEarn } from '../Model/ContactUs';
@Component({
  selector: 'app-refer-and-earn',
  templateUrl: './refer-and-earn.component.html',
  styleUrls: ['./refer-and-earn.component.scss']
})
export class ReferAndEarnComponent implements OnInit {
  refferearn = new RefferEarn();
  refferearnEncrypted = new RefferEarn();
  referrernameError:boolean=false;
  referrermobileError:boolean=false;
  referreremailError:boolean=false;
  referredrnameError:boolean=false;
  referredmobileError:boolean=false;
  referredemailError:boolean=false;
  sucessMessage :boolean=false;
  constructor(private _service : SendEmailService) { }

  ngOnInit() {
    $('html,body').animate({
      scrollTop: 0}
     );
  }

  sendMessage = function(){
    if(this.validateField())
    {
      
    this.refferearnEncrypted.referrername = this._service.getEncryptedValue(this.refferearn.referrername);
    this.refferearnEncrypted.referrermobile = this._service.getEncryptedValue(this.refferearn.referrermobile);
    this.refferearnEncrypted.referreremail = this._service.getEncryptedValue(this.refferearn.referreremail);

    this.refferearnEncrypted.referredrname = this._service.getEncryptedValue(this.refferearn.referredrname);
    this.refferearnEncrypted.referredmobile = this._service.getEncryptedValue(this.refferearn.referredmobile);
    this.refferearnEncrypted.referredemail = this._service.getEncryptedValue(this.refferearn.referredemail);
   
    this._service.sendEmailForRefferAndEarn(this.refferearnEncrypted);
    this.sucessMessage=true;

    this.refferearn.referrername=null;
    this.refferearn.referrermobile=null;
    this.refferearn.referreremail=null;

    this.refferearn.referredrname=null;
    this.refferearn.referredmobile=null;
    this.refferearn.referredemail=null;
    return;
    }
  }

  validateField= function()
  {
    debugger;
    this.sucessMessage=false;
    if(this.refferearn.referrername != undefined && this.refferearn.referrername != null && this.refferearn.referrername !="")
    {
      this.referrernameError = false;
    }
    else
    {
      this.referrernameError = true;
    }

    if(this.refferearn.referrermobile != undefined && this.refferearn.referrermobile != null && this.refferearn.referrermobile !="")
    {
      this.referrermobileError = false;
    }
    else
    {
      this.referrermobileError = true;
    }

    if(this.refferearn.referreremail != undefined && this.refferearn.referreremail != null && this.refferearn.referreremail !="")
    {
      this.referreremailError = false;
    }
    else
    {
      this.referreremailError = true;
    }


    if(this.refferearn.referredrname != undefined && this.refferearn.referredrname != null && this.refferearn.referredrname !="")
    {
      this.referredrnameError = false;
    }
    else
    {
      this.referredrnameError = true;
    }

    if(this.refferearn.referredmobile != undefined && this.refferearn.referredmobile != null && this.refferearn.referredmobile !="")
    {
      this.referredmobileError = false;
    }
    else
    {
      this.referredmobileError = true;
    }

    if(this.refferearn.referredemail != undefined && this.refferearn.referredemail != null && this.refferearn.referredemail !="")
    {
      this.referredemailError = false;
    }
    else
    {
      this.referredemailError = true;
    }

    

    if(this.referrernameError == true || this.referrermobileError == true || this.referreremailError == true 
      || this.referredrnameError == true ||this.referredmobileError == true ||this.referredemailError == true){
      return false;
    }
    else
    {
      return true;
    }
    
  }

}
