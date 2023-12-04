import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ObraFormComponent } from './obra-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ObraService } from 'src/app/service/obra-service/obra.service';
import { BairroService } from 'src/app/service/bairro-service/bairro.service';
import { EmpresaService } from 'src/app/service/empresa-service/empresa.service';
import { of } from 'rxjs';

describe('ObraFormComponent', () => {
  let component: ObraFormComponent;
  let fixture: ComponentFixture<ObraFormComponent>;
  let obraService: ObraService;
  let bairroService: BairroService;
  let empresaService: EmpresaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObraFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ObraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraFormComponent);
    component = fixture.componentInstance;
    obraService = TestBed.inject(ObraService);
    bairroService = TestBed.inject(BairroService);
    empresaService = TestBed.inject(EmpresaService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set obra.cep on maskCEP', () => {
    const event = { target: { value: '12345678' } };
    component.maskCEP(event);
    expect(component.obra.cep).toBe('12345678');
  });
 
});
