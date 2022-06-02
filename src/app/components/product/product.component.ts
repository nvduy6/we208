import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

productList!:Iproduct[];
  constructor(private productService:ProductsService,
    private notification: NzNotificationService) {
    this.ShowProducts();
  }

  ngOnInit(): void {
  }
ShowProducts(){
  this.productService.getProducts().subscribe(data=>{
    this.productList=data
  })
  
}
onRemoveItem(id:number){
  const confirm = window.confirm('ban co muon xoa khong');
  if(confirm){
    this.productService.removeProduct(id).subscribe(()=>{
      this.productList=this.productList.filter(item=>item.id!==id);
    })
  }
}
}
