import { Component, OnInit } from '@angular/core';

interface Worker {
  name: string,
  jobPosition: string,
  projects: number,
  revenue: number,
}

@Component({
  selector: 'app-welcome-back',
  templateUrl: './welcome-back.component.html',
  styleUrls: ['./welcome-back.component.scss']
})
export class WelcomeBackComponent implements OnInit {
  worker!: Worker

  constructor() {
    this.worker = {name: "Henry Price", jobPosition: "UI/UX Designer", projects: 125, revenue: 1245}
   }

  ngOnInit(): void {
  }

}
