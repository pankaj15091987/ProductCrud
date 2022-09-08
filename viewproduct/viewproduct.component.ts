import { Router } from '@angular/router';
import { CommonServiceService } from './../shared/common-service.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(public commonservice:CommonServiceService, public rt:Router ) { }

  plist:Product[]

  ngOnInit(): void {

    this.commonservice.getdata().subscribe(data=>{this.plist=data});
  }

  editData(prod:Product){

    this.commonservice.p=Object.assign({},prod);
    this.rt.navigate(['editproduct'])

  }

  deleteData(id:number){

    this.commonservice.deleteProduct(id).subscribe();
    this.rt.navigate(['viewproduct']).then(() => {
      window.location.reload();
    });
    

  }

  public openPDF():void{
    alert("Dowload PDF of DATA?");
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 2;
      PDF.addImage(FILEURI, 'PNG', 2, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });

  }

}
