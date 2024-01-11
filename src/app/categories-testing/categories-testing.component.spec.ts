import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTestingComponent } from './categories-testing.component';

describe('CategoriesTestingComponent', () => {
  let component: CategoriesTestingComponent;
  let fixture: ComponentFixture<CategoriesTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesTestingComponent]
    });
    fixture = TestBed.createComponent(CategoriesTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
