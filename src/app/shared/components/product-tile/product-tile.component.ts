import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../domain";

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {

  // @ts-ignore
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
