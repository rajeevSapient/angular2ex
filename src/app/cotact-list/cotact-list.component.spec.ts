import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactListComponent } from './cotact-list.component';

describe('CotactListComponent', () => {
  let component: CotactListComponent;
  let fixture: ComponentFixture<CotactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
