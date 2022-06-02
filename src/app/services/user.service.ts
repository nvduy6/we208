import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Iuser } from '../models/user';
const API_url:string='http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  API_URL:string='http://localhost:3000/users';
  constructor(private http:HttpClient) { }
  signIn(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(this.API_URL,user)
  }
  signUp(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(this.API_URL,user)
  }
}
