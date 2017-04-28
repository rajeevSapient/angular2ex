import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooddashboardComponent } from './booddashboard.component';

describe('BooddashboardComponent', () => {
  let component: BooddashboardComponent;
  let fixture: ComponentFixture<BooddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
