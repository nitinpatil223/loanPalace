import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-refer-and-earn',
  templateUrl: './refer-and-earn.component.html',
  styleUrls: ['./refer-and-earn.component.scss']
})
export class ReferAndEarnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html,body').animate({
      scrollTop: 0}
     );
  }

}
