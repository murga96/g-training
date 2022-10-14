import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-percent',
  templateUrl: './spinner-percent.component.html',
  styleUrls: ['./spinner-percent.component.scss']
})
export class SpinnerPercentComponent implements OnInit {
  @Input("percent") value!: number 
  @Input("label") label!: string 
  constructor() { }

  ngOnInit(): void {
  }

}
