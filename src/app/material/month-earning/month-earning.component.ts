import { Component, OnInit } from '@angular/core';
import { random } from 'src/app/utils';

@Component({
  selector: 'app-month-earning',
  templateUrl: './month-earning.component.html',
  styleUrls: ['./month-earning.component.scss']
})
export class MonthEarningComponent implements OnInit {
  monthEarning: number = 34254;
  percent: number = 12;
  value!: number
  constructor() {
   }

  ngOnInit(): void {
    this.value = random(60, 101)
  }

}
