import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

  date: Date | undefined;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
  }

}
