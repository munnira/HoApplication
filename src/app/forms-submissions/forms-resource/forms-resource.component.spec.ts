import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsResourceComponent } from './forms-resource.component';

describe('FormsResourceComponent', () => {
  let component: FormsResourceComponent;
  let fixture: ComponentFixture<FormsResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
