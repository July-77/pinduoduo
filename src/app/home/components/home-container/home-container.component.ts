import { Component, OnInit } from '@angular/core';
import { TopMenu } from "../../../shared/components";
import {ActivatedRoute, Router} from "@angular/router";
import {HomeService} from "../../services";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router, private service: HomeService, private route: ActivatedRoute) {
  }
  scrollableTabBgColor = '#fff';

  topMenus$?: Observable<any>;

  title: any;
  selectedTabLink$?: Observable<any>;

  ngOnInit(): void {
    this.topMenus$ = this.service.getTabs();
    // @ts-ignore
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )
  }


  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link])
  }

}
