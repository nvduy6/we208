import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

productList!:Iproduct[];
  constructor(private productService:ProductsService) {
    this.ShowProducts();
  }

  ngOnInit(): void {
  }
ShowProducts(){
  this.productService.getProducts().subscribe(data=>{
    this.productList=data
  })
}
}
