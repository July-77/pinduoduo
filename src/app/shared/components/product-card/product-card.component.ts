import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../domain";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  // @ts-ignore
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
