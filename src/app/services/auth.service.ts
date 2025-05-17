import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRequest } from '../sections/models/login-request.model';
import { jwtDecode } from 'jwt-decode'; 

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v1/auth';
  private tokenKey = 'auth_token';

  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<HttpResponse<void>> {
    return this.http.post<void>(`${this.baseUrl}/login`, loginRequest, {
      observe: 'response'
    }).pipe(
      tap(response => {
        const authHeader = response.headers.get('Authorization');
        if (authHeader) {
          const token = authHeader.replace('Bearer ', '');
          localStorage.setItem(this.tokenKey, token);
          this.loggedIn.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUserFromToken(): User | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      return jwtDecode<User>(token); 
    } catch {
      return null;
    }
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}