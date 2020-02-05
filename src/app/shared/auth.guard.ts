import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // console.log('AUTH GUARD', route);
        const auth = localStorage.getItem('dar-lab-auth');
        if(auth) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}