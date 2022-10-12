import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-home',
  templateUrl: './site-home.component.html',
  styleUrls: ['./site-home.component.scss'],
})
export class SiteHomeComponent implements OnInit {
  @ViewChild('button', {static: false}) button !: ElementRef;
  @ViewChild('tooltip', {static: false}) tooltip !: ElementRef;
  numberControl: FormControl = this.fb.control('', [
    Validators.required,
    Validators.min(1),
    Validators.max(100),
  ]);
  tooltipAppear: Object = {}

  constructor(private fb: FormBuilder, private router: Router) {}
  
  onMouseLeave() {
    console.log("button leave")
    this.tooltip.nativeElement.innerHTML = ""
    this.tooltipAppear = {visibility: 'hidden', opacity: '0'}
  }
  onMouseEnter() {
    this.tooltipAppear = {visibility: 'visible', opacity: '1'}
    this.tooltip.nativeElement.innerHTML = this.button?.nativeElement.innerHTML
    console.log("button enter")
  }
  onClick() {
    this.router.navigate(["site-restricted"], { queryParams: { number: this.numberControl.value } })
  }
  
  ngOnInit(): void {
  }
}
