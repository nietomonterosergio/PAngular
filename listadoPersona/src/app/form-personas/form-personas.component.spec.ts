import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonasComponent } from './form-personas.component';

describe('FormPersonasComponent', () => {
  let component: FormPersonasComponent;
  let fixture: ComponentFixture<FormPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
