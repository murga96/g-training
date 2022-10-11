import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteHomeComponent } from './site-home/site-home.component';
import { SiteRestrictedComponent } from './site-restricted/site-restricted.component';

const routes: Routes = [
  { path: '', component: SiteHomeComponent, title: 'Site - Home' },
  {
    path: 'site-restricted',
    component: SiteRestrictedComponent,
    title: 'Site-Restricted',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
