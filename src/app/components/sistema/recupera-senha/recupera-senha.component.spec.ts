import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { RecuperaSenhaComponent } from './recupera-senha.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('RecuperaSenhaComponent', () => {
  let component: RecuperaSenhaComponent;
  let fixture: ComponentFixture<RecuperaSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperaSenhaComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ],

      providers: [
        { provide: ActivatedRoute, useValue: {} }]
    });
    fixture = TestBed.createComponent(RecuperaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
