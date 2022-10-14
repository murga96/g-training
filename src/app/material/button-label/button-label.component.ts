import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-label',
  templateUrl: './button-label.component.html',
  styleUrls: ['./button-label.component.scss']
})
export class ButtonLabelComponent implements OnInit {
  @Input() title !:string;
  @Input() label !:string;
  @Input() icon !:string;
  @Input() isCurrency :boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
