import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteRestrictedComponent } from './site-restricted.component';

const routes: Routes = [{ path: '', component: SiteRestrictedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRestrictedRoutingModule { }
