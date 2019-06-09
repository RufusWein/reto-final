import { Component, OnInit } from '@angular/core';
import { Ofert } from '../ofert';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertService } from '../ofert.service';

@Component({
  selector: 'app-ofert-edit',
  templateUrl: '../ofert-add/ofert-add.component.html',
  styleUrls: [ '../ofert-add/ofert-add.component.css']
})
export class OfertEditComponent implements OnInit {
  private mensajeBoton :  string = 'Actualizar';
  private mensajeTitulo:  string = 'Editar Oferta';

  //expiredate: Date;
  ofert: Ofert = new Ofert();

  constructor(private router: Router,
              private route : ActivatedRoute,
              private servicio: OfertService) { }

  onSubmit(){
    this.servicio.actualizaOferta(this.ofert).subscribe( oferta => {
      console.log('id='+oferta.id);
      this.router.navigate(['./ofertas']);
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      this.servicio.getOferta(id).subscribe( oferta => this.ofert = oferta);
    });    
  }

}
