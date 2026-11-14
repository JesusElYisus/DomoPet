import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlimentacionPagePage } from './alimentacion-page.page';

describe('AlimentacionPagePage', () => {
  let component: AlimentacionPagePage;
  let fixture: ComponentFixture<AlimentacionPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentacionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
