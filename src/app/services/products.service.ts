import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../models/Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL: string = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }
  addProduct(product: any): Observable<Iproduct> {
    return this.http.post<Iproduct>(this.API_URL, product)
  }
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.API_URL);
  }
  getProduct(id: string | number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.API_URL}/${id}`)
  }
  removeProduct(id: number): Observable<Iproduct> {
    return this.http.delete<Iproduct>(`${this.API_URL}/${id}`)
  }
  updateProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(`${this.API_URL}/${product.id}`, product);
  }
}
