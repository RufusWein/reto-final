import { Component, OnInit } from '@angular/core';
import { Ofert } from '../ofert';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ofert-add',
  templateUrl: './ofert-add.component.html',
  styleUrls: ['./ofert-add.component.css']
})
export class OfertAddComponent implements OnInit {
  ofert: Ofert;
  constructor() { }

  onSubmit(form: NgForm){

  }
  ngOnInit() {
  }

}
