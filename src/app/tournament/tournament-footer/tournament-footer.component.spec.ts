import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFooterComponent } from './tournament-footer.component';

describe('TournamentFooterComponent', () => {
  let component: TournamentFooterComponent;
  let fixture: ComponentFixture<TournamentFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
