import { HttpClient } from '@angular/common/http';
import { Injectable,} from '@angular/core';
import { Observable } from 'rxjs';
import { Obra } from 'src/app/models/obra-model/obra';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  private baseUrl = 'http://localhost:8080/api/obra';

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<Obra> {
    return this.http.get<Obra>(`${this.baseUrl}?id=${id}`);
  }

  findAll(): Observable<Obra[]> {
    return this.http.get<Obra[]>(`${this.baseUrl}/lista`);
  }

  save(obra: Obra): Observable<string> {
    return this.http.post<string>(this.baseUrl, obra);
  }

  update(id: number, obra: Obra): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}?id=${id}`, obra);
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}?id=${id}`);
  }
}