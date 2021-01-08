import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRotasComponent } from './menu-rotas.component';

describe('MenuRotasComponent', () => {
  let component: MenuRotasComponent;
  let fixture: ComponentFixture<MenuRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
