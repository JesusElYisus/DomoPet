import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UbicacionPagePage } from './ubicacion-page.page';

describe('UbicacionPagePage', () => {
  let component: UbicacionPagePage;
  let fixture: ComponentFixture<UbicacionPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
