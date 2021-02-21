import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachRecipeComponent } from './each-recipe.component';

describe('EachRecipeComponent', () => {
  let component: EachRecipeComponent;
  let fixture: ComponentFixture<EachRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
