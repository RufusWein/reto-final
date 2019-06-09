import { Component, OnInit } from '@angular/core';
import { Ofert } from '../ofert';
import { NgForm } from '@angular/forms';
import { OfertService } from '../ofert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofert-add',
  templateUrl: './ofert-add.component.html',
  styleUrls: ['./ofert-add.component.css']
})
export class OfertAddComponent implements OnInit {
  mensajeBoton : string = 'Crear';
  mensajeTitulo: string = 'Nueva Oferta';

  ofert: Ofert = new Ofert();
  constructor(private servicio :OfertService,
              private router: Router) {}

  onSubmit(){
    this.servicio.addOfert(this.ofert).subscribe( oferta => {
      console.log('id='+oferta.id);
      this.router.navigate(['./ofertas']);
    })
  }

  ngOnInit() {
  }

}
