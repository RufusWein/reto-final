import { Component, OnInit } from '@angular/core';
import { Ofert } from '../ofert';
import { NgForm } from '@angular/forms';
import { OfertService } from '../ofert.service';

@Component({
  selector: 'app-ofert-add',
  templateUrl: './ofert-add.component.html',
  styleUrls: ['./ofert-add.component.css']
})
export class OfertAddComponent implements OnInit {
  ofert: Ofert;
  constructor(private servicio :OfertService ) {}

  onSubmit(form: NgForm){
    //this.servicio
  }
  ngOnInit() {
  }

}
