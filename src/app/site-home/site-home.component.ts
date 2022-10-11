import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-site-home',
  templateUrl: './site-home.component.html',
  styleUrls: ['./site-home.component.scss'],
})
export class SiteHomeComponent /* implements OnInit */ {
  numberControl: FormControl = this.fb.control('', [
    Validators.required,
    Validators.min(1),
    Validators.max(100),
  ]);
  constructor(private fb: FormBuilder) {}

  onClick() {
    
  }

  // ngOnInit(): void {
  //   this.titleService.setTitle('Site - Home');
  // }
}
