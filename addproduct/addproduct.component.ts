import { Supplier } from './../supplier';
import { Router } from '@angular/router';
import { CommonServiceService } from './../shared/common-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(public fb:FormBuilder, public cs:CommonServiceService, public rt:Router) { }
  loginform:FormGroup
  suplist:any

  ngOnInit(): void {

    this.loginform=this.fb.group({
      id:[],
      productName:[''],
      productDescription:[''],
      productPrice:[],
      Supplier:this.fb.group({
        sid:[],
        sname:[''],
        number:[]

      })


    })
    this.cs.getsupplier().subscribe(data=>{this.suplist=data});

  }
  saveproduct(){
    
    console.log(this.loginform.get(['productName']).value)
    this.cs.saveproduct(this.loginform.value).subscribe();
    this.rt.navigate(['viewproduct']).then(() => {
      window.location.reload();
    });
    
  }
  savesid(s){
    this.cs.s.sid=s.target.value
  }


}
