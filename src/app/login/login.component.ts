import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../models/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onAdd = new EventEmitter()
  user: Iuser = {
    name: '',
    email: '',
    password: ''
  }
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private routes: Router,
    private route: ActivatedRoute
  ) { }
  // constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userEmail: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  onSubmit() {
    if (this.validateForm.valid) {
      this.userService.signIn(this.user).subscribe(res => {
                localStorage.setItem('user', JSON.stringify(res.user));
                setTimeout(() => {
                  this.routes.navigate(['']);
                }, 2000)
              })
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

}
