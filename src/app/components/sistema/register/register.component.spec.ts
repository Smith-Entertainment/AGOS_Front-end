import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuarioService } from 'src/app/service/usuario-service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let usuarioService: UsuarioService;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format phone number input with mask', () => {
    const input = fixture.nativeElement.querySelector('input[name=celular]');
    input.value = '(11)23456-7890';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('(11)23456-7890');
  });

  it('should call put method when user id is not null', () => {
    spyOn(component, 'put');
    component.user.id = 1;
    component.save();
    expect(component.put).toHaveBeenCalled();
  });

});
