import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewsupplierComponent } from './viewsupplier/viewsupplier.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { EditsupplierComponent } from './editsupplier/editsupplier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    AddsupplierComponent,
    ViewproductComponent,
    ViewsupplierComponent,
    EditproductComponent,
    EditsupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
