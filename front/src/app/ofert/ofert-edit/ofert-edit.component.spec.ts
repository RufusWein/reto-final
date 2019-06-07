import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertEditComponent } from './ofert-edit.component';

describe('OfertEditComponent', () => {
  let component: OfertEditComponent;
  let fixture: ComponentFixture<OfertEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
