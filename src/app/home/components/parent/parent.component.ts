// @ts-ignore

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

// @ts-ignore
  @ViewChild('inputRef', {static:true}) inputRef: ElementRef

  constructor() { }

  ngOnInit(): void {
    fromEvent(this.inputRef.nativeElement, 'input')
      .subscribe((ev: any) =>
        console.log(ev.target.value));
    console.log('hhhhi')
  }
}
