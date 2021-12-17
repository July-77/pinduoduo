import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from "../shared/shared.module";

import { HomeContainerComponent } from './components';
import { HomeDetailComponent } from './components';
import { HomeGrandComponent } from './components';
import { HomeAuxComponent } from './components';
import {ParentComponent} from "./components";


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ParentComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
