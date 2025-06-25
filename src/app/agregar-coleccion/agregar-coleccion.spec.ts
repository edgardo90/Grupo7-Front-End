import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarColeccion } from './agregar-coleccion';

describe('AgregarColeccion', () => {
  let component: AgregarColeccion;
  let fixture: ComponentFixture<AgregarColeccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarColeccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarColeccion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
