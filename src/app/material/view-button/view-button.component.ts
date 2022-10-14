import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-button',
  templateUrl: './view-button.component.html',
  styleUrls: ['./view-button.component.scss']
})
export class ViewButtonComponent implements OnInit {
  @Input("text")text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
