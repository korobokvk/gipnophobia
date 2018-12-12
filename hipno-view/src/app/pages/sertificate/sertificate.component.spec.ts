import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SertificateComponent } from './sertificate.component';

describe('SertificateComponent', () => {
  let component: SertificateComponent;
  let fixture: ComponentFixture<SertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
