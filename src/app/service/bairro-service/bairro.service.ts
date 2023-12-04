import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bairro } from 'src/app/models/bairro-model/bairro';

@Injectable({
  providedIn: 'root'
})
export class BairroService {

  private baseUrl = 'http://204.236.251.232:8080/api/bairro';

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<Bairro> {
    return this.http.get<Bairro>(`${this.baseUrl}?id=${id}`);
  }
  findByNome(nome: string): Observable<Bairro> {
    return this.http.get<Bairro>(`${this.baseUrl}/findBy?nome=${nome}`);
  }
  
  findAll(): Observable<Bairro[]> {
    return this.http.get<Bairro[]>(`${this.baseUrl}/lista`);
  }
  create(obra: Bairro): Observable<Bairro> {
    return this.http.post<Bairro>(this.baseUrl, obra);
  }
  update(id: number, obra: Bairro): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}?id=${id}`, obra);
  }
  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}?id=${id}`);
  }
}
