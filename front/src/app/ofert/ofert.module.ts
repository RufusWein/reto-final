import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertListComponent } from './ofert-list/ofert-list.component';
import { OfertEditComponent } from './ofert-edit/ofert-edit.component';
import { OfertAddComponent } from './ofert-add/ofert-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OfertListComponent, OfertEditComponent, OfertAddComponent]
})
export class OfertModule { }
