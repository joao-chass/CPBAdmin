import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPapersVoluntarioComponent } from './news-papers-voluntario.component';

describe('NewsPapersVoluntarioComponent', () => {
  let component: NewsPapersVoluntarioComponent;
  let fixture: ComponentFixture<NewsPapersVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPapersVoluntarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPapersVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
