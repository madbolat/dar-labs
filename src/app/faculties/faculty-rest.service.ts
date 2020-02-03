import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Faculty } from './faculty.types';

@Injectable({
    providedIn: 'root'
})
export class FacultyRestService {
    apiUrl = 'http://ca-api.witharts.kz';

    constructor(private http: HttpClient) {
        // this.http;
    }
    // ALL FAC
    getFaculties(): Observable<Faculty[]> {
        return this.http.get<Faculty[]>(`${this.apiUrl}/faculties`);
    }
    // ONE FAC
    getFaculty(id: string): Observable<Faculty> {
        return this.http.get<Faculty>(`${this.apiUrl}/faculties/${id}`);
    }
    // NEW FAC
    createFaculty(faculty: Faculty): Observable<Faculty> {
        return this.http.post<Faculty>(`${this.apiUrl}/faculties`, faculty);
    }
    // DEL FAC
    deleteFaculty(id: string): Observable<Faculty> {
        return this.http.delete<Faculty>(`${this.apiUrl}/faculties/${id}`);
    }
    // PUT FAC
    updateFaculty(faculty: Faculty): Observable<Faculty> {
        return this.http.put<Faculty>(`${this.apiUrl}/faculties/${faculty.id}`, faculty);
    }
}