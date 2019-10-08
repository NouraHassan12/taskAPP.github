import { Component, OnInit,  TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  persons = [];
modalRef:BsModalRef;
  constructor(private modalservice:BsModalService) {
    this.persons= Array(201).fill(0).map(() => {
      return {
       name:'MEMBER NAME',
       title:'MEMBER POSITION',
       location:'MEMBER LOCATION',
       rate:'EVALUATION:4.9'
      }
    })
   }

  ngOnInit() {

  }

  openmodel(template:TemplateRef<any>){
this.modalRef=this.modalservice.show(template);
  }


}
