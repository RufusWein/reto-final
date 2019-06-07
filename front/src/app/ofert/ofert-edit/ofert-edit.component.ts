import { Component, OnInit } from '@angular/core';
import { Ofert } from '../ofert';

@Component({
  selector: 'app-ofert-edit',
  templateUrl: './ofert-edit.component.html',
  styleUrls: ['./ofert-edit.component.css']
})
export class OfertEditComponent implements OnInit {

    expiredate: Date;
    ofert: Ofert ={ id:1,title:"Rebaja",description:"esto es una prueba",discount:55, expiredate: new Date() };

  constructor() { }

  ngOnInit() {
  }

}
