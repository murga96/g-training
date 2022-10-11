import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-site-restricted',
  templateUrl: './site-restricted.component.html',
  styleUrls: ['./site-restricted.component.scss']
})
export class SiteRestrictedComponent implements OnInit {

  number: string | null= "";
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.queryParamMap.subscribe((param) => {
      this.number = param.get("number")
    })
  }

}
