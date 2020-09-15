import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { WorkComponent } from './components/work/work.component';
import { TableComponent } from './components/table/table.component';

import { RestService } from './services/rest/rest.service';
import { RestTableService } from './services/restTable/rest-table.service';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    HomeComponent,
    RegisterComponent,
    WorkComponent,
    TableComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RestService,
    RestTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
