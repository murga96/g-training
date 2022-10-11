import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRestrictedRoutingModule } from './site-restricted-routing.module';
import { SiteRestrictedComponent } from './site-restricted.component';


@NgModule({
  declarations: [
    SiteRestrictedComponent
  ],
  imports: [
    CommonModule,
    SiteRestrictedRoutingModule
  ]
})
export class SiteRestrictedModule { }
