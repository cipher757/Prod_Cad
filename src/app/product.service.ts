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
}
