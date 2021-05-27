import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePresencaComponent } from './lista-de-presenca.component';

describe('ListaDePresencaComponent', () => {
  let component: ListaDePresencaComponent;
  let fixture: ComponentFixture<ListaDePresencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDePresencaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
