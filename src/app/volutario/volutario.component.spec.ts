import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolutarioComponent } from './volutario.component';

describe('VolutarioComponent', () => {
  let component: VolutarioComponent;
  let fixture: ComponentFixture<VolutarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolutarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolutarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
