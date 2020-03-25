import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedActivityComponent } from './suggested-activity.component';

describe('SuggestedActivityComponent', () => {
  let component: SuggestedActivityComponent;
  let fixture: ComponentFixture<SuggestedActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedActivityComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
