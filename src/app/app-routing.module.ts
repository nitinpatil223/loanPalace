import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent} from './home/home.component';
import{ServicesComponent} from './services/services.component';
import{ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path:'',redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[
   
    HomeComponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent
  ],
})
export class AppRoutingModule { } 
