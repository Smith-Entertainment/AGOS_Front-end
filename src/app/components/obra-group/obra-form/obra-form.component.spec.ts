import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraFormComponent } from './obra-form.component';

describe('ObraFormComponent', () => {
  let component: ObraFormComponent;
  let fixture: ComponentFixture<ObraFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObraFormComponent]
    });
    fixture = TestBed.createComponent(ObraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
