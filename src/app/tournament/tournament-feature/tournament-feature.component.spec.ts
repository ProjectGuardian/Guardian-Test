import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFeatureComponent } from './tournament-feature.component';

describe('TournamentFeatureComponent', () => {
  let component: TournamentFeatureComponent;
  let fixture: ComponentFixture<TournamentFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
