import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vertical-grid',
  templateUrl: './vertical-grid.component.html',
  styleUrls: ['./vertical-grid.component.css']
})
export class VerticalGridComponent implements OnInit {

  @Input() itemWidth ='4rem';
  @Input() itemHeight = '4rem';
  @Input() gridGap = '5px';


  constructor() { }

  ngOnInit(): void {
  }

  get templateRows() {
    return `minmax(auto-fill, ${this.gridGap})`
  }

  get templateColumns() {
    return `repeat(auto-fill, minmax(autofill,${this.itemWidth}, 1fr))`
  }


}
