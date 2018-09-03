import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent} from './home/home.component';
import{ServicesComponent} from './services/services.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  {path:'',redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[
   
    HomeComponent,
    ServicesComponent
  ],
})
export class AppRoutingModule { } 
