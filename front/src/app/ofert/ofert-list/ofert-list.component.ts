import { Component, OnInit } from '@angular/core';
import { Ofert } from '../ofert';
import { OfertService } from '../ofert.service';


@Component({
  selector: 'app-ofert-list',
  templateUrl: './ofert-list.component.html',
  styleUrls: ['./ofert-list.component.css']
})
export class OfertListComponent implements OnInit {
  public oferts: Array<Ofert>;
  
  constructor(private ofertService: OfertService) { }

  ngOnInit() {
    this.ofertService.getOfert().subscribe(data => {this.oferts = data});
  }

}
