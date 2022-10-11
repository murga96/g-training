import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLoadingGuard } from './custom-loading.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestrictGuard } from './restrict-guard.guard';
import { SiteHomeComponent } from './site-home/site-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'site-home', pathMatch: 'full' },
  { path: 'site-home', component: SiteHomeComponent, title: 'Site - Home' },
  {
    path: 'site-restricted',
    loadChildren: () =>
      import('./site-restricted/site-restricted.module').then(
        (m) => m.SiteRestrictedModule
      ),
    canActivate: [RestrictGuard],
    canLoad: [CustomLoadingGuard],
    title: 'Site - Restricted',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'Site – Not found',
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
