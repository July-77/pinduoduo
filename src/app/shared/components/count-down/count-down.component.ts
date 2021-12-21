import {Component, Input, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";
import {map, takeWhile, tap} from "rxjs/operators";

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  @Input() startDate = new Date()
  @Input() futureDate?: Date ;

  countDown$?: Observable<string>;


  constructor() { }

  ngOnInit(): void {
    this.countDown$ = this.getCountDownObservable(
      this.startDate, this.futureDate)
  }

  private getCountDownObservable(startDate: Date, futureDate?: Date) :Observable<string> {
    return interval(1000).pipe(
      map(elapse => this.diffInsec(startDate, futureDate) - elapse),
      takeWhile(gap => gap >= 0),
      tap(val => console.log(val)),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)  //Math.floor 向下取整
      })),
      map(({hour, minute, second}) => `${hour}:${minute}:${second}`)
    );
  }

  private diffInsec = (start: Date, future?: Date): number =>{

    // @ts-ignore
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / 1000);
  }

}
