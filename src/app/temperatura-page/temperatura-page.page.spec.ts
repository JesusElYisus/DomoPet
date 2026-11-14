import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperaturaPagePage } from './temperatura-page.page';

describe('TemperaturaPagePage', () => {
  let component: TemperaturaPagePage;
  let fixture: ComponentFixture<TemperaturaPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
