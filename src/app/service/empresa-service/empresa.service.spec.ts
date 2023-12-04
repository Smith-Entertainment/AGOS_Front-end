import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmpresaService } from './empresa.service';
import { Empresa } from 'src/app/models/empresa-model/empresa';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('EmpresaService', () => {
  let service: EmpresaService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmpresaService],
    });

    service = TestBed.inject(EmpresaService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get an empresa by ID', () => {
    const dummyId = 1;
    const dummyEmpresa: Empresa = {
      id: 0,
      nome: '',
      cnpj: ''
    };

    spyOn(httpClient, 'get').and.returnValue(of(dummyEmpresa));

    service.findById(dummyId).subscribe(empresa => {
      expect(empresa).toEqual(dummyEmpresa);
    });
  });

  it('should get an empresa by CNPJ', () => {
    const dummyCNPJ = '12345678901234';
    const dummyEmpresa: Empresa = {
      id: 0,
      nome: '',
      cnpj: ''
    };

    spyOn(httpClient, 'get').and.returnValue(of(dummyEmpresa));

    service.findByCNPJ(dummyCNPJ).subscribe(empresa => {
      expect(empresa).toEqual(dummyEmpresa);
    });
  });

  it('should get a list of empresas', () => {
    const dummyEmpresas: Empresa[] = [{   id: 1,
      nome: '',
      cnpj: '' }, {   id: 2,
        nome: '',
        cnpj: ''}];

    spyOn(httpClient, 'get').and.returnValue(of(dummyEmpresas));

    service.findAll().subscribe(empresas => {
      expect(empresas).toEqual(dummyEmpresas);
    });
  });

  it('should create an empresa', () => {
    const dummyEmpresa: Empresa = {
      id: 0,
      nome: '',
      cnpj: ''
    };

    spyOn(httpClient, 'post').and.returnValue(of(dummyEmpresa));

    service.create(dummyEmpresa).subscribe(createdEmpresa => {
      expect(createdEmpresa).toEqual(dummyEmpresa);
    });
  });

  it('should update an empresa', () => {
    const dummyId = 1;
    const dummyEmpresa: Empresa = {
      id: 0,
      nome: '',
      cnpj: ''
    };

    spyOn(httpClient, 'put').and.returnValue(of('Success'));

    service.update(dummyId, dummyEmpresa).subscribe(response => {
      expect(response).toEqual('Success');
    });
  });

  it('should delete an empresa', () => {
    const dummyId = 1;

    spyOn(httpClient, 'delete').and.returnValue(of('Success'));

    service.delete(dummyId).subscribe(response => {
      expect(response).toEqual('Success');
    });
  });
});
