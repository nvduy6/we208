import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPcate } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
@Output() onAdd = new EventEmitter()
category:IPcate={
  name:''
}
  validateForm!: FormGroup;

 

  constructor(private fb: FormBuilder,
    private categoryService:CategoryService,
    private router:Router,
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.categoryService.getCate(id).subscribe(data=>{
        this.category=data
      })
    }
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      remember: [true]
    });
  }
  submitForm(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (this.validateForm.valid) {
      this.categoryService.updateCate(this.category).subscribe((data)=>{
        setTimeout(()=>{
          this.router.navigate(['admin/category'])
        },2000)
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

    if (this.validateForm.valid) {
      this.categoryService.addCate(this.category).subscribe((data)=>{
        setTimeout(()=>{
          this.router.navigate(['admin/category'])
        },2000)
      })
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
