import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {
  user:Iuser={
    name:'',
    email:'',
    password:'',
  }
  validateForm!: FormGroup;

  onSubmit(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder,
    private userService:UserService,
    private activateRote: ActivatedRoute,
    private routes:Router,
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      
      userName: [null, [Validators.required]],
      userEmail: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  submitForm(){
    if (this.validateForm.valid) {
     this.userService.signUp(this.user).subscribe(()=>{
      setTimeout(() => {
        
        this.routes.navigate(['signin']);
      }, 2000)
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
