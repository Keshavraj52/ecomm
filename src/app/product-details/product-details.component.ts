import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productdata:undefined|product;
  productQuantity:number=1;
  removeCart=false;
  constructor(private activeRoute:ActivatedRoute,private product:ProductService){}
  ngOnInit(): void {
    let productId=this.activeRoute.snapshot.paramMap.get('productId')
      productId && this.product.getProduct(productId).subscribe((result)=>{
        this.productdata=result;
        let cartData=localStorage.getItem('localCart');
        if(productId && cartData){
          let items=JSON.parse(cartData);
          items=items.filter((item:product)=>productId==item.id.toString())
          if(items.length){
            this.removeCart=true;

          }else{
            this.removeCart=false;

          }
        }

      })
  }
  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1

    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1
    }
  }
  AddToCart(){
    if(this.productdata){
      this.productdata.quantity=this.productQuantity;
      if(!localStorage.getItem('user')){
        this.removeCart=true
        this.product.localAddToCart(this.productdata);
      }
    }
  }
  removeToCart(productId:number){
this.product.removeItemFromCart(productId)
this.removeCart=false
  }
}
