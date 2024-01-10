import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMockingComponent } from './categories-mocking.component';

describe('CategoriesMockingComponent', () => {
  let component: CategoriesMockingComponent;
  let fixture: ComponentFixture<CategoriesMockingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesMockingComponent]
    });
    fixture = TestBed.createComponent(CategoriesMockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
