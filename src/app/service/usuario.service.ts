import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}?id=${id}`);
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/lista`);
  }

  create(usuario: Usuario): Observable<string> {
    return this.http.post<string>(this.baseUrl, usuario);
  }

  update(id: number, usuario: Usuario): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}?id=${id}`, usuario);
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}?id=${id}`);
  }
}
