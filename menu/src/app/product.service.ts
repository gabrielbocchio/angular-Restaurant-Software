import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  };

  getProductDetails(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`)
  }
    
  addProduct(product: Product): Observable<any>{
    return this.http.post(`${this.baseUrl}/product`, product)
  }

  editProduct(id: string, product: Product): Observable<any>{
    return this.http.put(`${this.baseUrl}/products/${id}`, product)
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/${id}`);
  }


}
