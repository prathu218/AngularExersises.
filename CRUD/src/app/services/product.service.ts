import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../products/products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private url = 'http://localhost:3000/products';
  products: any;
  constructor(private http: HttpClient) {}

  private currentId = 1;

  


  
  getProducts(){
    return this.http.get<Products[]>(this.url);
  }
  
  createProduct(newProduct: Products){
    return this.http.post<Products>(this.url, newProduct);
  }

  getProductsById(id: number){
    return this.http.get<Products>(`${this.url}/${id}`);
  }

  updateProduct(data:Products){
    return this.http.put(`${this.url}/${data.id}`,data);
  }

  deleteProduct(id:number){
    return this.http.delete<Products>(`${this.url}/${id}`)
  }
}
