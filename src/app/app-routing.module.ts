import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent} from './home/home.component';
import{ServicesComponent} from './services/services.component';
import{ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import { ReferAndEarnComponent } from './refer-and-earn/refer-and-earn.component';
import { CommonModule } from '@angular/common';  



const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'referandearn', component: ReferAndEarnComponent },
  { path: 'contact', component: ContactComponent },
  { path:'',redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [FormsModule,CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[
   
    HomeComponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent,
    ReferAndEarnComponent
  ],
})
export class AppRoutingModule { } 
