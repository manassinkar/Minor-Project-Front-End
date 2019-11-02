import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(username: string, password:string)
  {
    return this.http.post<any>(`http://localhost:3000/user/login`,{ username, password }).pipe(map(user =>
      {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }

  register(username: string, password:string, contact:string, email:string,age:Number,annualIncome:Number)
  {
    return this.http.post<any>(`http://localhost:3000/user/register`,{ username, email, contact, age, annualIncome, password }).pipe(map(user =>
      {
        return user;
      }));
  }
  logout()
  {
    localStorage.removeItem('currentUser');
  }

}
