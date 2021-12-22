import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Ad, Product} from "../../../shared/domain";
import {filter, map } from "rxjs/operators";
import {HomeService} from "../../../home/services";

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {


  ad$?: Observable<Ad>;
  // @ts-ignore
  products$: Observable<Product[]>


  constructor(private service: HomeService) { }

  ngOnInit(): void {

    this.ad$ = this.service.getAdByTab('men').pipe(
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    );

    this.products$ = this.service.getProductsByTab('men');

  }




}
