import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomLoadingGuard implements CanLoad {
  number: string | null = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let tempNumber: number = Number(
      this.router
        .getCurrentNavigation()
        ?.extractedUrl.queryParamMap.get('number')
    );
    // this.activatedRoute.queryParamMap.subscribe((param) => {tempNumber =  Number(param.get('number'));console.log(param, 'param'); return false});
    // let tempNumber: number = Number(route.queryParamMap.get('number'));
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
