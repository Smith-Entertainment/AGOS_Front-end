import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Obra } from '../models/obra-model/obra';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  private baseUrl = 'http://localhost:8080/api/obra';

  
  http = inject(HttpClient);

  findById(id: number): Observable<Obra> {
    return this.http.get<Obra>(`${this.baseUrl}?id=${id}`);  }

  findAll(): Observable<Obra[]> {
    return this.http.get<Obra[]>(this.baseUrl+"/lista");
  }

  save(obra: Obra): Observable<Obra> {
    return this.http.post<Obra>(this.baseUrl, obra);
  }

  update(id: number, obra: Obra): Observable<Obra> {
    return this.http.put<Obra>(`${this.baseUrl}/${id}`, obra);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
