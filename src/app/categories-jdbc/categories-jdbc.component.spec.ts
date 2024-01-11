import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesJdbcComponent } from './categories-jdbc.component';

describe('CategoriesJdbcComponent', () => {
  let component: CategoriesJdbcComponent;
  let fixture: ComponentFixture<CategoriesJdbcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesJdbcComponent]
    });
    fixture = TestBed.createComponent(CategoriesJdbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
