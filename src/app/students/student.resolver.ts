import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// My imports
import { Student } from './student.types';
import { StudentRestService } from './student-rest.service';

@Injectable()
export class StudentResolver implements Resolve<Student> {

    constructor(private studentRestService: StudentRestService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Student> {
        return this.studentRestService.getStudent(route.paramMap.get('id'));
    }
}