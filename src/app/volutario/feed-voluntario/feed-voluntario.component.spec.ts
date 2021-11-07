import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedVoluntarioComponent } from './feed-voluntario.component';

describe('FeedVoluntarioComponent', () => {
  let component: FeedVoluntarioComponent;
  let fixture: ComponentFixture<FeedVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedVoluntarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
