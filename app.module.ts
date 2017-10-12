import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',  pathMatch: 'prefix', redirectTo: 'login'
      },
      {
        path: 'login',  component: LoginComponent
      },
       {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      }
    
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
