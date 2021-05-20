import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolutarioCadastroComponent } from './volutario-cadastro.component';

describe('VolutarioCadastroComponent', () => {
  let component: VolutarioCadastroComponent;
  let fixture: ComponentFixture<VolutarioCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolutarioCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolutarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
