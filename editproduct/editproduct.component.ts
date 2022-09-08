import { Router } from '@angular/router';
import { Product } from './../product';
import { CommonServiceService } from './../shared/common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(public common:CommonServiceService, public rt:Router) { }

  ngOnInit(): void {
  }

  submitData(p:Product){
    console.log(p);
    
    this.common.updatedata(p).subscribe();
    this.rt.navigate(['viewproduct']).then(() => {
      window.location.reload();
    });

  }

}
