import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Usuario } from 'src/app/models/usuario-model/usuario';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(UsuarioService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get a user by ID', () => {
    const dummyId = 1;
    const dummyUser: Usuario = {
      id: 0,
      nome: '',
      cpf: '',
      email: '',
      celular: '',
      tituloEleitor: '',
      senha: '',
      token: '',
      role: '',
      nomePai: '',
      nomeMae: '',
      dataNascimento: {},
      obras: []
    };

    service.findById(dummyId).subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpTestingController.expectOne(`${service['baseUrl']}?id=${dummyId}`);
    expect(req.request.method).toBe('GET');

    req.flush(dummyUser);
  });
  it('should get a list of users', () => {
    const dummyUsers: Usuario[] = [{
      id: 0,
      nome: '',
      cpf: '',
      email: '',
      celular: '',
      tituloEleitor: '',
      senha: '',
      token: '',
      role: '',
      nomePai: '',
      nomeMae: '',
      dataNascimento: {},
      obras: []
    }, {
      id: 0,
      nome: '',
      cpf: '',
      email: '',
      celular: '',
      tituloEleitor: '',
      senha: '',
      token: '',
      role: '',
      nomePai: '',
      nomeMae: '',
      dataNascimento: {},
      obras: []
    }];

    service.findAll().subscribe(users => {
      expect(users).toEqual(dummyUsers);
    });

    const req = httpTestingController.expectOne(`${service['baseUrl']}/lista`);
    expect(req.request.method).toBe('GET');

    req.flush(dummyUsers);
  });
});
