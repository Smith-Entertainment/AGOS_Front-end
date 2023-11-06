import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraListComponent } from './obra-list.component';

describe('ObraListComponent', () => {
  let component: ObraListComponent;
  let fixture: ComponentFixture<ObraListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObraListComponent]
    });
    fixture = TestBed.createComponent(ObraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
