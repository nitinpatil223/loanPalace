import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'home-body');
    $('html,body').animate({
      scrollTop: 0}
     );
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'home-body');
  }

}
