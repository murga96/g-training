import { Component, OnInit } from '@angular/core';

export interface TopCitiesSellingProducts {
  name: string;
  productsCount: number;
  percent: number;
}

@Component({
  selector: 'app-top-cities',
  templateUrl: './top-cities.component.html',
  styleUrls: ['./top-cities.component.scss']
})
export class TopCitiesComponent implements OnInit {
  displayedColumns: string[] = [
    'name', 'count', 'progress-bar'
  ];

  cities: TopCitiesSellingProducts[] = [
    { name: 'San Francisco', productsCount: 1456, percent: 81 },
    { name: 'Los Angeles', productsCount: 1123, percent: 61 },
    { name: 'San Diego', productsCount: 1026, percent: 40 },
  ];
  getColor(percent: number):string {
    if(percent > 80){
      return 'primary'
    }else if(percent > 60) {
      return 'accent'
    }
    return 'warn'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
