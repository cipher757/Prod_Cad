import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProduct() {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000/product';

  constructor(private http:HttpClient) { }

  getProducts(): Observable<product[]>{
    return this.http.get<product[]>(this.url);
  }

  save(product: product): Observable<product>{
    return this.http.post<product>(this.url, product);
  }
  delete(product: product): Observable<void> {
    return this.http.delete<void>(`${this.url}/${product.id}`);
  }
  update(product: product) : Observable<product>{
    return this.http.put<product>(`${this.url}/${product.id}`, product);
  }
}
