import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ObraPerfilComponent } from './obra-perfil.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('ObraPerfilComponent', () => {
  let component: ObraPerfilComponent;
  let fixture: ComponentFixture<ObraPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObraPerfilComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ObraPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
