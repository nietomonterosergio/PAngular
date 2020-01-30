import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModificarComponent } from './form-modificar.component';

describe('FormModificarComponent', () => {
  let component: FormModificarComponent;
  let fixture: ComponentFixture<FormModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
