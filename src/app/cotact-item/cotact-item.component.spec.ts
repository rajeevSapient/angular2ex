import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactItemComponent } from './cotact-item.component';

describe('CotactItemComponent', () => {
  let component: CotactItemComponent;
  let fixture: ComponentFixture<CotactItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotactItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotactItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
