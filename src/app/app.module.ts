import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudAddComponent } from './crud-add/crud-add.component';
import { CrudGetComponent } from './crud-get/crud-get.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudDeleteComponent } from './crud-delete/crud-delete.component';

import {CollegeService} from './college.service';

@NgModule({
  declarations: [
    AppComponent,
    CrudAddComponent,
    CrudGetComponent,
    CrudEditComponent,
    CrudDeleteComponent
  ],
  imports: [
    BrowserModule ,
    AppRoutingModule ,
    SlimLoadingBarModule ,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
