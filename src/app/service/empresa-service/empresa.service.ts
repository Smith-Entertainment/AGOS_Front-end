import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/models/empresa-model/empresa';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseUrl = 'http://204.236.251.232:8080/api/empresa';

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}?id=${id}`);
  }
  findByCNPJ(cnpj: string): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}findBy${cnpj}`);
  }

  findAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.baseUrl}/lista`);
  }
  create(obra: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.baseUrl, obra);
  }
  update(id: number, obra: Empresa): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${id}`, obra);
  }
  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}
