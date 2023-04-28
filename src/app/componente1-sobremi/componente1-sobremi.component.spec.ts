import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1SobremiComponent } from './componente1-sobremi.component';

describe('Componente1SobremiComponent', () => {
  let component: Componente1SobremiComponent;
  let fixture: ComponentFixture<Componente1SobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1SobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1SobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
