import { Component, OnInit } from '@angular/core';

interface TopCitiesSellingProducts {
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
    { name: 'Los Angeles', productsCount: 1123, percent: 61 },
    { name: 'San Francisco', productsCount: 1456, percent: 81 },
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

  constructor() { 
    this.cities = this.cities.sort((a, b) => b.productsCount - a.productsCount)
  }

  ngOnInit(): void {
  }

}
