import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  array = ["https://intphcm.com/data/upload/mau-banner-hinh-anh.jpg",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4R4QZ8k5hkQ0GFXPTuiDYZQpKJ8L7ijDZr_DUss3MxzqZvR6Yound5LjyWk1nwpOeVFA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtNbX-NzB6pZw5xt8fEas1Sz5tg0RU04ASQ&usqp=CAU", 
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fbacgiangweb.com%2Fwp-content%2Fuploads%2Fdich-vu-thiet-ke-hinh-anh-quang-cao-bgw.jpg&imgrefurl=https%3A%2F%2Fbacgiangweb.com%2Fdich-vu-thiet-ke-hinh-anh-banner-logo-slide-poster.html&tbnid=ek6DONgFZWJFEM&vet=12ahUKEwix4rWx9474AhVVAaYKHXtMCFgQMygCegUIARDAAQ..i&docid=kSsLyBGk1DJedM&w=1900&h=745&q=anh%20banner&ved=2ahUKEwix4rWx9474AhVVAaYKHXtMCFgQMygCegUIARDAAQ"];
  constructor() { }

  ngOnInit(): void {
  }

}
