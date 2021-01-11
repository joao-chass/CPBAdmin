import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarNoticiasComponent } from './criar-noticias.component';

describe('CriarNoticiasComponent', () => {
  let component: CriarNoticiasComponent;
  let fixture: ComponentFixture<CriarNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
