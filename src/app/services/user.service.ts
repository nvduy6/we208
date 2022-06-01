import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Iuser } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
API_url:string='http://localhost:3000/users'
  constructor(private http:HttpClient) { }
  addUser(user:any):Observable<Iuser>{
    return this.http.post<Iuser>(this.API_url,user)
  }
}
