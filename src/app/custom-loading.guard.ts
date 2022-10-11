import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomLoadingGuard implements CanActivate {
  number: string | null = '';
  constructor(private router: Router) {}

  ngOnInit() {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let tempNumber: number = Number(route.queryParamMap.get('number'));
    if (tempNumber > 80) {
      return true;
    } else if (tempNumber > 40) {
      this.router.navigate(['/']).then(result => { window.location.href = 'https://www.google.com/'; });
      return false;
    }
    this.router.navigateByUrl('/not-found');
    return false;
  }
}
