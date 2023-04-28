import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente4HomeComponent } from './componente4-home.component';

describe('Componente4HomeComponent', () => {
  let component: Componente4HomeComponent;
  let fixture: ComponentFixture<Componente4HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente4HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente4HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
