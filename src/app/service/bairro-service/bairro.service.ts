import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bairro } from 'src/app/models/bairro-model/bairro';

@Injectable({
  providedIn: 'root'
})
export class BairroService {

  private baseUrl = 'http://localhost:8080/api/bairro';

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<Bairro> {
    return this.http.get<Bairro>(`${this.baseUrl}?id=${id}`);
  }
  findByNome(nome: string): Observable<Bairro> {
    return this.http.get<Bairro>(`${this.baseUrl}/byNome?nome=${nome}`);
  }
  
  findAll(): Observable<Bairro[]> {
    return this.http.get<Bairro[]>(`${this.baseUrl}/lista`);
  }
  create(obra: Bairro): Observable<string> {
    return this.http.post<string>(this.baseUrl, obra);
  }
  update(id: number, obra: Bairro): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}?id=${id}`, obra);
  }
  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}?id=${id}`);
  }
}
