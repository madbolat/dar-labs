import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// My imports
import { Faculty } from './faculty.types';
import { FacultyRestService } from '../shared/faculty-rest.service';

@Injectable()
export class FacultyResolver implements Resolve<Faculty> {

    constructor(private facultyRestService: FacultyRestService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Faculty> {
        return this.facultyRestService.getFaculty(route.paramMap.get('id'));
    }
}