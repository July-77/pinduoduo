import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OrderService} from "../../service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ProductVariant} from "../../domain";
import {filter, map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {

  // @ts-ignore
  variants$: Observable<ProductVariant[]>
  selectedIndex = 0;

  constructor(private service: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId')));

    this.variants$ = productId$.pipe(
      switchMap(productId =>
        // @ts-ignore
        this.service.getProductVariantsByProductId(productId))
    )

  }

}
