import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-site-restricted',
  templateUrl: './site-restricted.component.html',
  styleUrls: ['./site-restricted.component.scss'],
})
export class SiteRestrictedComponent {
  @ViewChild('square', { static: false })
  square!: ElementRef;
  width: number = 0;
  height: number = 0;
  margin: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.width = this.random(50, 101);
    console.log(this.width, 'width');
  }

  ngAfterViewInit(): void {
    Promise.resolve().then(() => /* { */
     ( this.height = this.square.nativeElement.offsetWidth)
      // this.margin = this.square.nativeElement.offsetWidth / 2
    /* } */);
  }

  resize() {
    this.height = this.square.nativeElement.offsetWidth
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
