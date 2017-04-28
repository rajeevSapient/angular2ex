import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookleafComponent } from './bookleaf.component';

describe('BookleafComponent', () => {
  let component: BookleafComponent;
  let fixture: ComponentFixture<BookleafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookleafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookleafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
