import { Component, OnInit } from '@angular/core';
import { Ofert } from '../ofert';
import { OfertService } from '../ofert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ofert-list',
  templateUrl: './ofert-list.component.html',
  styleUrls: ['./ofert-list.component.css']
})
export class OfertListComponent implements OnInit {
  titulo: string = 'Ofertas';
  oferts: Array<Ofert>;
  
  constructor(private ofertService: OfertService,
              private router: Router) {
  }

  editOferta(id){
    console.log('Edita '+id);
    this.router.navigate(['./ofertas/edit/', id]);
  }

  deleteOferta(id){
    console.log('Delete '+id);
    this.ofertService.deleteOferta(id).subscribe( ofertas => {
      //this.router.navigate(['./ofertas']); // no nos srive
      //window.location.reload(); // recargamos pagina
      this.oferts = ofertas; 
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    if (this.router.url === '/ofertas/validas') {
      this.titulo = 'Ofertas Válidas';
      this.ofertService.getOfertasValidas().subscribe(data => {this.oferts = data});
    } else
    this.ofertService.getOfertas().subscribe(data => {this.oferts = data});
  }

}
