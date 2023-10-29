import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioDetailsComponent } from './envio-details.component';

describe('EnvioDetailsComponent', () => {
  let component: EnvioDetailsComponent;
  let fixture: ComponentFixture<EnvioDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvioDetailsComponent]
    });
    fixture = TestBed.createComponent(EnvioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
