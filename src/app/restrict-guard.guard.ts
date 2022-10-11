import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestrictGuardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let tempNumber: number = Number(route.queryParamMap.get('number'));
    // tempNumber = 82;
    console.log(tempNumber);
    if (tempNumber > 80) {
      return true;
    } else if (tempNumber > 40) {
      this.router.navigate(['/']).then((result) => {
        window.location.href = 'https://www.google.com/';
      });
      return false;
    }
    this.router.navigateByUrl('/not-found');
    return false;
  }  
}
