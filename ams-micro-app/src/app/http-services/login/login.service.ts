import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/model/login/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  fetchSchools() {
    return this.http.get<any[]>("http://localhost:8081/schools");
  }
  fetchClasses() {
    return this.http.get<any[]>("http://localhost:8081/classes");
  }
  
  constructor(private router: Router, private http: HttpClient) { 
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
      this.user = this.userSubject.asObservable();
    }
    public get userValue(): User {
      return this.userSubject.value;
    }
    signup(user: User) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json')
      return this.http.post<User>("http://localhost:8081/users", user,{headers, responseType: 'text' as 'json'});
    }
    //login
    login(email: String, password: String) {
      return this.http.post<User>(`http://localhost:8081/login`, { email, password })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
              this.userSubject.next(user);
              return user;
          }));
    }
}
