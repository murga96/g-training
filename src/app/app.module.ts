import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHomeComponent } from './site-home/site-home.component';
import { SiteRestrictedComponent } from './site-restricted/site-restricted.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHomeComponent,
    SiteRestrictedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
