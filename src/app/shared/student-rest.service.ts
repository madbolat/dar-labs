import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Student } from '../students/student.types';

@Injectable({
    providedIn: 'root'
})
export class StudentRestService {
    apiUrl = 'http://ca-api.witharts.kz';

    constructor(private http: HttpClient) {
        // this.http;
    }

    // ALL STUDS
    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(`${this.apiUrl}/students`);
    }
    // ONE STUD
    getStudent(id: string): Observable<Student> {
        return this.http.get<Student>(`${this.apiUrl}/students/${id}`);
    }
    // NEW STUD
    createStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(`${this.apiUrl}/students`, student);
    }
    // DEL STUD
    deleteStudent(id: string): Observable<Student> {
        return this.http.delete<Student>(`${this.apiUrl}/students/${id}`);
    }
    // PUT STUD
    updateStudent(student: Student): Observable<Student> {
        return this.http.put<Student>(`${this.apiUrl}/students/${student.id}`, student);
    }
}