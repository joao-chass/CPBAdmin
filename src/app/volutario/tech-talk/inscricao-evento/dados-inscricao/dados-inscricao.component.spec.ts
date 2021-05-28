import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosInscricaoComponent } from './dados-inscricao.component';

describe('DadosInscricaoComponent', () => {
  let component: DadosInscricaoComponent;
  let fixture: ComponentFixture<DadosInscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosInscricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
