import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraDetailsComponent } from './obra-details.component';

describe('ObraDetailsComponent', () => {
  let component: ObraDetailsComponent;
  let fixture: ComponentFixture<ObraDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObraDetailsComponent]
    });
    fixture = TestBed.createComponent(ObraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
