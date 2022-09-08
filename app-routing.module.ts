import { EditsupplierComponent } from './editsupplier/editsupplier.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewsupplierComponent } from './viewsupplier/viewsupplier.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'addproduct', component:AddproductComponent

  },
  {
    path:'viewproduct', component:ViewproductComponent
  },
  {
    path:'addsupplier', component:AddsupplierComponent
  },
  {
    path:'viewsupplier', component:ViewsupplierComponent
  },
  {
    path:'editproduct', component:EditproductComponent
  },
  {
    path:'editsupplier', component:EditsupplierComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
