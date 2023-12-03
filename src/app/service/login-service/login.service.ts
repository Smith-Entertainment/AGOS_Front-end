import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login-model/login';
import { Usuario } from 'src/app/models/usuario-model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


api : string = 'http://localhost:8080/api/login'

http = inject(HttpClient);

  constructor() { }



  logar(login:Login):Observable<Usuario>{

    return this.http.post<Usuario>(this.api,login)
  }


}

