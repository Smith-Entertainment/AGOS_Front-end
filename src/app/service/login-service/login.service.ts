import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login-model/login';
import { Usuario } from 'src/app/models/usuario-model/usuario';
import { JwtPayload, jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

api : string = 'http://localhost:8080/api/login';

http = inject(HttpClient);

  constructor() { }



  logar(login:Login): Observable<Usuario>{

    return this.http.post<Usuario>(this.api,login)
  }


  deslogar(): Observable<any>{

    return this.http.get<any>(this.api + '/deslogar');


  }


  addToken(token:string){

    localStorage.setItem('token',token);
  }

  getToken(){

    return localStorage.getItem('token');

  }

  getId(){

    return this.decodeToken().id;

  }

  getNome(){

    return this.decodeToken().nome;

  }

  getRole(){

    return this.decodeToken().role;

  }

  removeToken(){

    localStorage.removeItem('token');

  }


  decodeToken(){

    let token = this.getToken() as string;

    const decoded = jwtDecode(token) as Usuario;

    return decoded;

  }

  hasPermission(role: string){

    if(role == this.decodeToken().role){

      return true;

    }
    else{

      return false;
      
    }

  }



}

