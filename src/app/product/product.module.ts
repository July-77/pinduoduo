import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import {SharedModule} from "../shared/shared.module";
import { ProductContainerComponent } from './components';
import { GroupItemComponent } from './components';
import { GroupShortListComponent } from './components';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
