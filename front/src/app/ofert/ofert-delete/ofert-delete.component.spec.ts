import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertDeleteComponent } from './ofert-delete.component';

describe('OfertDeleteComponent', () => {
  let component: OfertDeleteComponent;
  let fixture: ComponentFixture<OfertDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
