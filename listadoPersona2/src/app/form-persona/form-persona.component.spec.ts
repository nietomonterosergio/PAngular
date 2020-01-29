import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonaComponent } from './form-persona.component';

describe('FormPersonaComponent', () => {
  let component: FormPersonaComponent;
  let fixture: ComponentFixture<FormPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
