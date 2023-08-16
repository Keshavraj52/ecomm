import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  productList:undefined | product[]
  constructor(private product:ProductService){}
  ngOnInit(): void {
      this.product.productList().subscribe((result)=>{
        console.warn(result)
        this.productList=result;
      })
  }

}
