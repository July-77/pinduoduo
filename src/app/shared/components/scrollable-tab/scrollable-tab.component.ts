import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from "@angular/core";

export interface TopMenu {
  id: number;
  title: string;
  readonly link?: any;
}


@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  @Input() selectedTabLink?: string;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'red';
  @Input() titleColor = '#000';
  @Input() indicatorColor = 'red';
  @Output() tabSelected = new EventEmitter();

  constructor() {
    console.log('组件构造调用')
  }

  ngOnInit(): void {
    console.log('组件初始化')
  }


  handleSelection(index:number) {

    this.tabSelected.emit(this.menus[index]);

  }


}
