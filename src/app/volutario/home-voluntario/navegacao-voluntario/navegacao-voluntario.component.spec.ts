import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaoVoluntarioComponent } from './navegacao-voluntario.component';

describe('NavegacaoVoluntarioComponent', () => {
  let component: NavegacaoVoluntarioComponent;
  let fixture: ComponentFixture<NavegacaoVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacaoVoluntarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacaoVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
