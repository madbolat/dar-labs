import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthRestService {
    apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {
        // this.http;
    }

    // AUTH
    signIn(user: any): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        return this.http.post<any>(`${this.apiUrl}/users/auth`, JSON.stringify(user), {
            headers: headers
        });
    }

    // REG
    signUp(user: any): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        return this.http.post<any>(`${this.apiUrl}/users`, JSON.stringify(user), {
            headers: headers
        });
    }
}