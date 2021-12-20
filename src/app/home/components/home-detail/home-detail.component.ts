import { Component, OnInit } from '@angular/core';
import {Channel, ImageSlider} from "../../../shared/components";
import {ActivatedRoute} from "@angular/router";
import {HomeService} from "../../services";
import {filter, map} from "rxjs/operators";
import { Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: HomeService) { }

  selectedTabLink$?: Observable<string | null>;

  imageSliders: ImageSlider[] = [];

  channels: Channel[] = [];

  ngOnInit(): void {

    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );

    console.log('this.selectedTabLink$===' , this.selectedTabLink$)

    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params)
    });

    this.service.getBanners().subscribe(banners =>{
      this.imageSliders = banners;
    });

    this.service.getchannels().subscribe(channels =>{
      this.channels = channels;
    });


  }

}
