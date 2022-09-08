import { Supplier } from './../supplier';
import { Product } from './../product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  getdataurl:string="http://localhost:9898/api/products"
  postdataurl:string="http://localhost:9898/api/product/"
  deleteandupdatedataurl:string="http://localhost:9898/api/products/"
  postsupplier:string="http://localhost:9898/api/supplier/"
  getsupplierurl:string="http://localhost:9898/api/suppliers/"


  // url:string="http://localhost:3000/product"
  productlist:Product[]
  slist:Supplier[]
  


  constructor(public http:HttpClient, public rt:Router) {}

  p:Product={
    id:0,
    productName:'',
    productDescription:'',
    productPrice:0,
    supplier:{
      sid:0,
      sname:'',
      contact:0
    }


  }
  s:Supplier={
    sid:0,
    sname:'',
    contact:0
  }

  saveproduct(pdt:Product )
  {
    console.log("service"+pdt.productName);
    
    return this.http.post<Product>(this.postdataurl+this.s.sid,pdt);
   
    
  }

  getdata():Observable<Product[]>{

    console.log("service");
    return this.http.get<Product[]>(this.getdataurl)

  }

  deleteProduct(id:number){
    return this.http.delete<Product>(this.deleteandupdatedataurl+id)
    
  }

  updatedata(p:Product):Observable<Product>{
    return this.http.put<Product>(this.deleteandupdatedataurl+p.id,p);
  }


  savsupplier(sup:Supplier):Observable<Supplier>{
    return this.http.post<Supplier>(this.postsupplier,sup)
  }
  
  getsupplier():Observable<Supplier>{

   return this.http.get<Supplier>(this.getsupplierurl)

  }

  deletesupplier(sid:number){
    return this.http.delete<Supplier>(this.postsupplier+sid)
  }

  
}


function productName(arg0: string, productName: any) {
  throw new Error('Function not implemented.');
}

