import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

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
}
