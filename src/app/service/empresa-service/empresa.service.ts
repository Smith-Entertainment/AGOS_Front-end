import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/models/empresa-model/empresa';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseUrl = '/api/empresa';

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}?id=${id}`);
  }
  findAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.baseUrl}/lista`);
  }
  create(obra: Empresa): Observable<string> {
    return this.http.post<string>(this.baseUrl, obra);
  }
  update(id: number, obra: Empresa): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}?id=${id}`, obra);
  }
  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}?id=${id}`);
  }
}
