import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList!:Iproduct[];
  constructor(
    private productService:ProductsService
  ) { 
    this.ShowProducts()
  }

  ngOnInit(): void {
  }
  ShowProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.productList=data
    })
  }

}
