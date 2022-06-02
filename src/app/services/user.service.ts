import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Iuser } from '../models/user';
const API_url:string='http://localhost:3000';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) { }
  signIn(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(`${API_url}/signin`,user)
  }
  signUp(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(`${API_url}/signup`,user)
  }
}
