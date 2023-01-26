import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatHeroComponent } from './cat-hero.component';

describe('CatHeroComponent', () => {
  let component: CatHeroComponent;
  let fixture: ComponentFixture<CatHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
