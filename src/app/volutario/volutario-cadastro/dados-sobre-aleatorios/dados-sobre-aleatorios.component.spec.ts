import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosSobreAleatoriosComponent } from './dados-sobre-aleatorios.component';

describe('DadosSobreAleatoriosComponent', () => {
  let component: DadosSobreAleatoriosComponent;
  let fixture: ComponentFixture<DadosSobreAleatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosSobreAleatoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosSobreAleatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
