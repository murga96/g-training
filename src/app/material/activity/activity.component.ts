import { Component, OnInit } from '@angular/core';
interface Activity {
  date: Date;
  description: string;
}
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  activities: Activity[] = [
    { date: new Date(2022, 11, 22), description: 'Some random description....' },
    { date: new Date(2022, 11, 17), description: 'Some random description....' },
    { date: new Date(2022, 11, 15), description: 'Some random description....' },
    { date: new Date(2022, 11, 12), description: 'Some random description....' },
  ];

  getDatePipe(date: Date): string {
    console.log(date, 'date')
    return date.toLocaleDateString("en-US", {day: "numeric", month: "short"})
  }

  constructor() {}

  ngOnInit(): void {}
}
