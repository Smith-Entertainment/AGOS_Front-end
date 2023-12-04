import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RecuperaSenhaDetailsComponent } from './recupera-senha-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('RecuperaSenhaDetailsComponent', () => {
  let component: RecuperaSenhaDetailsComponent;
  let fixture: ComponentFixture<RecuperaSenhaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperaSenhaDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ],

      providers: [
        { provide: ActivatedRoute, useValue: {} }]
    });
    fixture = TestBed.createComponent(RecuperaSenhaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
