import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ProductVariant} from "../../domain";

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  // @ts-ignore
  variants$: Observable<ProductVariant[]>

  constructor(private service: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
