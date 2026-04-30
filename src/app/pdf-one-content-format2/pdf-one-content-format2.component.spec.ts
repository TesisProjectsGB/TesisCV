import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfOneContentFormat2Component } from './pdf-one-content-format2.component';

describe('PdfOneContentFormat2Component', () => {
  let component: PdfOneContentFormat2Component;
  let fixture: ComponentFixture<PdfOneContentFormat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfOneContentFormat2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfOneContentFormat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
