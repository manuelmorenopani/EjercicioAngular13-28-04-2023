import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente3CurriculumComponent } from './componente3-curriculum.component';

describe('Componente3CurriculumComponent', () => {
  let component: Componente3CurriculumComponent;
  let fixture: ComponentFixture<Componente3CurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente3CurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente3CurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
