import { Supplier } from './../supplier';
import { Router } from '@angular/router';
import { CommonServiceService } from './../shared/common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewsupplier',
  templateUrl: './viewsupplier.component.html',
  styleUrls: ['./viewsupplier.component.css']
})
export class ViewsupplierComponent implements OnInit {
slist:any
  constructor(public cs:CommonServiceService, public rt:Router) { }

  ngOnInit(): void {
    this.cs.getsupplier().subscribe(data =>{this.slist=data})
  }

  editData(s:Supplier){
    this.cs.s=Object.assign({},s);
    this.rt.navigate(['editsupplier']);

  }


  deleteData(sid){
    this.cs.deletesupplier(sid).subscribe();
    // window.location.reload();
  }
  

}
