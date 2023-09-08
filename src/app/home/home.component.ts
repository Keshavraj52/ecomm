import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, product } from '../data-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularproducts: undefined | product[]
  trendyProducts: undefined | product[]
 
  constructor(private product: ProductService) { }
  ngOnInit(): void {
    this.product.popularProducts().subscribe((data) => {
      this.popularproducts = data;
    })
    this.product.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    })
  }
 
}
