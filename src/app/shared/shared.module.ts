import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HorizontalGridComponent, ImageSliderComponent, ScrollableTabComponent} from "./components";
import {GridItemDirective} from "./directives";
import {GridItemImageDirective} from "./directives";
import {GridItemTitleDirective} from "./directives";
import { CountDownComponent } from './components';
import { FooterComponent } from './components';
import { VerticalGridComponent } from './components';



@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent
  ]
})
export class SharedModule { }
