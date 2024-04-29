
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core'; 
import { DefaultService } from '../services/default.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' }) 
export class guardGuard implements CanActivate {

  constructor(private router: Router,private service:DefaultService) {} 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.isAuthenticated()) {
      return true;
    }
    return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }
}
