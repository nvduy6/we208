import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail!:Iproduct
  constructor(private router:ActivatedRoute,
    private productService: ProductsService) { 
      const id = this.router.snapshot.paramMap.get('id')!;
    this.productService.getProduct(+id).subscribe(data=>{this.productDetail=data})
    }

  ngOnInit(): void {
  }

}
