import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//ANGULAR
import { FormsModule } from '@angular/forms';


//PRIMENG
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    CardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
