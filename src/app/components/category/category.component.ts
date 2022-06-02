import { Component, OnInit } from '@angular/core';
import { IPcate } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categoryList!:IPcate[];
  constructor(
    private categoryService:CategoryService
  ) { }

  ngOnInit(): void {
  }
  ShowCategory(){
    this.categoryService.getCates().subscribe(data=>{
      this.categoryList=data;
    })
  }
  onRemoveItem(id:number){
    const confirm = window.confirm('Ban co muon xoa khong');
    if(confirm){
      this.categoryService.removeCate(id).subscribe(()=>{
        this.categoryList=this.categoryList.filter(item=>item.id!==id)
      })
    }
  }

}
