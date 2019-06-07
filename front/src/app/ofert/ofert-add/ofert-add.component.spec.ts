import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertAddComponent } from './ofert-add.component';

describe('OfertAddComponent', () => {
  let component: OfertAddComponent;
  let fixture: ComponentFixture<OfertAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
