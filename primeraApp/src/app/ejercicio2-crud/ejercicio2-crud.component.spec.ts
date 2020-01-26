import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2CrudComponent } from './ejercicio2-crud.component';

describe('Ejercicio2CrudComponent', () => {
  let component: Ejercicio2CrudComponent;
  let fixture: ComponentFixture<Ejercicio2CrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejercicio2CrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio2CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
