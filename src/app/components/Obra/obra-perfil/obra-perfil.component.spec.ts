import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraPerfilComponent } from './obra-perfil.component';

describe('ObraPerfilComponent', () => {
  let component: ObraPerfilComponent;
  let fixture: ComponentFixture<ObraPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObraPerfilComponent]
    });
    fixture = TestBed.createComponent(ObraPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
