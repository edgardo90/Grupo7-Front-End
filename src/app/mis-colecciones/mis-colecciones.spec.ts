import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisColecciones } from './mis-colecciones';

describe('MisColecciones', () => {
  let component: MisColecciones;
  let fixture: ComponentFixture<MisColecciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisColecciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisColecciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
