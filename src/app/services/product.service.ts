import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addproduct(data:product){
   return this.http.post('http://localhost:3000/product',data)
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/product');
  }
}
