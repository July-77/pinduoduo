import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: `<div class="dialog-container">
<ng-content></ng-content>
</div>`,
  styleUrls: [`
  .container {
  display: flex;
  flex-direction: column;
  justify-content:start;
  align-items: stretch;
  height: 100%;
  }
  `]
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
