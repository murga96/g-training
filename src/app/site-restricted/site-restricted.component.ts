import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-site-restricted',
  templateUrl: './site-restricted.component.html',
  styleUrls: ['./site-restricted.component.scss'],
})
export class SiteRestrictedComponent implements OnInit {
  @ViewChild('square', { static: false })
  square!: ElementRef;
  width: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.width = this.random(50, 101);
    console.log(this.width, 'width');
  }

  random(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
