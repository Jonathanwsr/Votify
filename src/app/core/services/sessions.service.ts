import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../../features/sessions/session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  private apiUrl = 'http://localhost:8080/api/v1/sessions';

  constructor(private http: HttpClient) {}

  getAll(token: string): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
    });
  }

  getById(id: number, token: string): Observable<Session> {
    return this.http.get<Session>(`${this.apiUrl}/${id}`, {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
    });
  }

   createSession(sessionData: any, token: string) {
  return this.http.post(this.apiUrl, sessionData, {
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }),
  });
}

  update(id: number, session: any, token: string): Observable<Session> {
    return this.http.put<Session>(`${this.apiUrl}/${id}`, session, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }),
    });
  }

  delete(id: number, token: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }


}
