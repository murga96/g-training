import { Component, OnInit } from '@angular/core';
import 'iconify-icon';

interface SocialSales {
  social: string;
  sales: number;
}

@Component({
  selector: 'app-social-sales',
  templateUrl: './social-sales.component.html',
  styleUrls: ['./social-sales.component.scss']
})
export class SocialSalesComponent implements OnInit {

  socialSources: SocialSales[] = [
    { social: 'Facebook', sales: 125 },
    { social: 'Twitter', sales: 112 },
    { social: 'Instagram', sales: 104 },
  ];

  getMinSocialStyle(social: string): Object {
    if(social === "Facebook"){
      return {backgroundColor: "royalblue"}
    }
    else if(social === "Twitter"){
        return {backgroundColor: "cornflowerblue"}
    }
    return{ backgroundColor: "red"  }  
  }

  constructor() { 
    this.socialSources = this.socialSources.sort((a, b) => b.sales - a.sales)
  }

  ngOnInit(): void {
  }

}
