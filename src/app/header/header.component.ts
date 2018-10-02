import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
 aboutScroll = function () {
  $('html,body').animate({
    scrollTop: $("#about").offset().top-100},
    'slow');
 }
}
