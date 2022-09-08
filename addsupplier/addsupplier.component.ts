import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonServiceService } from './../shared/common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent implements OnInit {

  constructor(public cs:CommonServiceService, public fb:FormBuilder, public rt:Router) { }
  submitform:FormGroup
  ngOnInit(): void {
    this.submitform=this.fb.group({

      sid:0,
    sname:"",
    number:''
    })
  }

  savesupplier(){
    this.cs.savsupplier(this.submitform.value).subscribe();
    this.rt.navigate(['viewsupplier']).then (() => {
      window.location.reload();
    })
     
  }

}
