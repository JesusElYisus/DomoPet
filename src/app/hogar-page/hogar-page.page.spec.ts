import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HogarPagePage } from './hogar-page.page';

describe('HogarPagePage', () => {
  let component: HogarPagePage;
  let fixture: ComponentFixture<HogarPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HogarPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
