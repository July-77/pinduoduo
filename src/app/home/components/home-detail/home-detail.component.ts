import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HomeService} from "../../services";
import {filter, map, switchMap} from "rxjs/operators";
import { Observable } from "rxjs";
import {Ad, Product} from "../../../shared/domain";



@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit , OnDestroy{

  constructor(private route: ActivatedRoute,
              private service: HomeService) { }

  selectedTabLink$?: Observable<string | null>;

  imageSliders$?: Observable<any>;

  channels$?: Observable<any>;

  ad$?: Observable<Ad>;
  // @ts-ignore
  products$: Observable<Product[]>

  ngOnInit(): void {

    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink')
      )
    );

    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params)
    });

    this.imageSliders$ = this.service.getBanners();

    this.channels$ = this.service.getchannels();

    this.ad$ = this.selectedTabLink$.pipe(
      // @ts-ignore
      switchMap(tab => this.service.getAdByTab(tab)),
      // @ts-ignore
      filter(ads => ads.length > 0),
      // @ts-ignore
      map(ads => ads[0])
    )

    this.products$ = this.selectedTabLink$.pipe(
      // @ts-ignore
      switchMap(tab => this.service.getProductsByTab(tab))
    )


  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
