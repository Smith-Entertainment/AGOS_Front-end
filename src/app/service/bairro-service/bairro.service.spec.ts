import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BairroService } from './bairro.service';
import { Bairro } from 'src/app/models/bairro-model/bairro';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('BairroService', () => {
  let service: BairroService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BairroService],
    });

    service = TestBed.inject(BairroService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a bairro by ID', () => {
    const dummyId = 1;
    const dummyBairro: Bairro = {
      id: 0,
      nome: ''
    };

    spyOn(httpClient, 'get').and.returnValue(of(dummyBairro));

    service.findById(dummyId).subscribe(bairro => {
      expect(bairro).toEqual(dummyBairro);
    });
  });

  it('should get a bairro by name', () => {
    const dummyNome = 'SomeName';
    const dummyBairro: Bairro = {
      id: 0,
      nome: ''
    };

    spyOn(httpClient, 'get').and.returnValue(of(dummyBairro));

    service.findByNome(dummyNome).subscribe(bairro => {
      expect(bairro).toEqual(dummyBairro);
    });
  });

  it('should get a list of bairros', () => {
    const dummyBairros: Bairro[] = [{    id: 1,
      nome: ''  }, {    id: 2,
        nome: ''  }];

    spyOn(httpClient, 'get').and.returnValue(of(dummyBairros));

    service.findAll().subscribe(bairros => {
      expect(bairros).toEqual(dummyBairros);
    });
  });

  it('should create a bairro', () => {
    const dummyBairro: Bairro = {
      id: 0,
      nome: ''
    };

    spyOn(httpClient, 'post').and.returnValue(of(dummyBairro));

    service.create(dummyBairro).subscribe(createdBairro => {
      expect(createdBairro).toEqual(dummyBairro);
    });
  });

  it('should update a bairro', () => {
    const dummyId = 1;
    const dummyBairro: Bairro = {
      id: 0,
      nome: ''
    };

    spyOn(httpClient, 'put').and.returnValue(of('Success'));

    service.update(dummyId, dummyBairro).subscribe(response => {
      expect(response).toEqual('Success');
    });
  });

  it('should delete a bairro', () => {
    const dummyId = 1;

    spyOn(httpClient, 'delete').and.returnValue(of('Success'));

    service.delete(dummyId).subscribe(response => {
      expect(response).toEqual('Success');
    });
  });
});
