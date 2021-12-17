import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  _title;
  constructor() {
    this._title = 'hi'
  }

  ngOnInit(): void {
  }

  public get title() : string {
    console.log('脏值检测')

    return this._title;
  }

  public get time() : number{
    return Date.now();
  }

}
