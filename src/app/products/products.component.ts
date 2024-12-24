import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList!: Product[];
  priceMax :number=5;
  constructor(){}
  ngOnInit():void{
    this.productList=[
      {id :1, title:'T-shirt 1',price:18,quantity:0,like:0},
      {id :2, title:'T-shirt 2',price:21,quantity:10,like:0},
      {id :3, title:'T-shirt 3',price:16,quantity:8,like:0}
    ];
  }
  buyProduit(i :number){
    this.productList[i].quantity--;
  }

}
