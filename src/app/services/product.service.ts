import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { product } from '../data-type';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData=new EventEmitter<product[]|[]>()
  constructor(private http:HttpClient) { }
  addproduct(data:product){
   return this.http.post('http://localhost:3000/product',data)
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/product');
  }
  deleteProduct(id:number){
   return this.http.delete(`http://localhost:3000/product/${id}`)
  }
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/product/${id}`)
  }
  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/product/${product.id}`,product)

  }
  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=7');
  }
  trendyProducts(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=8');
  }
  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`);
  }
  localAddToCart(data:product){
    let cartData=[];
    let localCart=localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([data]));
    }else{
      cartData=JSON.parse(localCart);
      cartData.push(data)
      localStorage.setItem('localCart',JSON.stringify(cartData));
    }
    this.cartData.emit(cartData)
  }
  removeItemFromCart(productId:number){
    let cartData=localStorage.getItem('localCart');
    if(cartData){
      let items:product[]=JSON.parse(cartData);
      items=items.filter((item:product)=>productId!==item.id);
      localStorage.setItem('localCart',JSON.stringify(items));
      this.cartData.emit(items)
    }
  }
}
