import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertListComponent } from './ofert-list/ofert-list.component';
import { OfertEditComponent } from './ofert-edit/ofert-edit.component';
import { OfertAddComponent } from './ofert-add/ofert-add.component';
import { OfertDeleteComponent } from './ofert-delete/ofert-delete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OfertListComponent, OfertEditComponent, OfertAddComponent, OfertDeleteComponent]
})
export class OfertModule { }
