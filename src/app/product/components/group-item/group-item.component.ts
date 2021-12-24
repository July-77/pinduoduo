import {Component, Input, OnInit} from '@angular/core';
import {GroupOrder} from "../../domain";

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {
  // @ts-ignore
  @Input() order: GroupOrder;
  // @ts-ignore
  startDate: Date;
  // @ts-ignore
  futureDate: Date;



  constructor() { }

  ngOnInit(): void {
    this.startDate = this.order.startAt;
    this.futureDate = new Date(this.startDate.getTime() + 24*3600*1000) //getTime为毫秒
  }

}
