import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario-model/usuario';
import { of } from 'rxjs';
import { UsuarioService } from 'src/app/service/usuario-service/usuario.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let usuarioService: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ],

      providers: [
        { provide: ActivatedRoute, useValue: {} }]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set usuario when getUsuarioBackend is called', () => {
    const usuario: Usuario = {
      id: 1, nome: 'Teste', role: 'ADMIN',
      cpf: '',
      email: '',
      celular: '',
      tituloEleitor: '',
      senha: '',
      token: '',
      nomePai: '',
      nomeMae: '',
      dataNascimento: {},
      obras: []
    };
    spyOn(usuarioService, 'findById').and.returnValue(of(usuario));
    component.getUsuarioBackend(1);
    expect(component.usuario).toEqual(usuario);
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set usuario when getUsuarioBackend is called', () => {
    const usuario: Usuario = {
      id: 1, nome: 'Teste', role: 'ADMIN',
      cpf: '',
      email: '',
      celular: '',
      tituloEleitor: '',
      senha: '',
      token: '',
      nomePai: '',
      nomeMae: '',
      dataNascimento: {},
      obras: []
    };
    spyOn(usuarioService, 'findById').and.returnValue(of(usuario));
    component.getUsuarioBackend(1);
    expect(component.usuario).toEqual(usuario);
  });

  it('should toggle isLoged when checkLogin is called', () => {
    component.isLoged = true;
    component.checkLogin();
    expect(component.isLoged).toBe(false);
    component.checkLogin();
    expect(component.isLoged).toBe(true);
  });

});
