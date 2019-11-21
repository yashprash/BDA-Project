import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecificComponent } from './update-specific.component';

describe('UpdateSpecificComponent', () => {
  let component: UpdateSpecificComponent;
  let fixture: ComponentFixture<UpdateSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
