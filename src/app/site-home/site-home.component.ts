import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-home',
  templateUrl: './site-home.component.html',
  styleUrls: ['./site-home.component.scss'],
})
export class SiteHomeComponent implements OnInit {
  numberControl: FormControl = this.fb.control('', [
    Validators.required,
    Validators.min(1),
    Validators.max(100),
  ]);
  constructor(private fb: FormBuilder, private router: Router) {}

  onClick() {
    this.router.navigate(["site-restricted"], { queryParams: { number: this.numberControl.value } })
  }

  ngOnInit(): void {
  }
}
