import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HeaderComponent} from './header/header.component';
import{FooterComponent} from './footer/footer.component';
import{HomeComponent} from './home/home.component';
import{ServicesComponent} from './services/services.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  {path:'',redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent
  ],
})
export class AppRoutingModule { } 
