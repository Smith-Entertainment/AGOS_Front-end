import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuarioService } from 'src/app/service/usuario-service/usuario.service';
import { ObraService } from 'src/app/service/obra-service/obra.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Obra } from 'src/app/models/obra-model/obra';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let usuarioService: UsuarioService;
  let obraService: ObraService;
  let route: ActivatedRoute;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    obraService = TestBed.inject(ObraService);
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
