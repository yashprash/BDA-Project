import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpecificComponent } from './select-specific.component';

describe('SelectSpecificComponent', () => {
  let component: SelectSpecificComponent;
  let fixture: ComponentFixture<SelectSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
