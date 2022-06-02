import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPcate } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL: string = 'http://localhost:3000/Categorys'

  constructor(private http: HttpClient) { }
  addCate(cate: any): Observable<IPcate> {
    return this.http.post<IPcate>(this.API_URL,cate )
  }
  getCates(): Observable<IPcate[]> {
    return this.http.get<IPcate[]>(this.API_URL);
  }
  getCate(id: string | number): Observable<IPcate> {
    return this.http.get<IPcate>(`${this.API_URL}/${id}`)
  }
  removeCate(id: number): Observable<IPcate> {
    return this.http.delete<IPcate>(`${this.API_URL}/${id}`)
  }
  updateCate(cate: IPcate): Observable<IPcate> {
    return this.http.put<IPcate>(`${this.API_URL}/${cate.id}`, cate);
  }
}
