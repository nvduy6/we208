import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Iproduct } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter()
  product:Iproduct={
    name:'',
    price:0,
    desc:''
  }
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService:ProductsService,
    private router:Router,
    private route:ActivatedRoute,
    private notification: NzNotificationService
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.productService.getProduct(id).subscribe(data=>{
        this.product=data
      })
    }
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      mobile:[null, [Validators.required]],
       comment: [null, [Validators.required]],
    });
  }
  onSubmit(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      if (this.validateForm.valid) {
        this.productService.updateProduct(this.product).subscribe((data)=>{
          this.notification.success('Cap nhat san pham thanh cong','')
          setTimeout(()=>{
            this.router.navigate(['/admin/product'])
                  },2000)
        })
        // console.log('submit', this.validateForm.value);
      } else {
        Object.values(this.validateForm.controls).forEach(control => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    }
    // product add
    if (this.validateForm.valid) {
      this.productService.addProduct(this.product).subscribe((data)=>{
        this.notification.success('Them san pham thanh cong','')
        setTimeout(()=>{
          this.router.navigate(['admin/product'])
                },2000)
      })
      // console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
