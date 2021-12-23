import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import {SharedModule} from "../shared/shared.module";
import { ProductContainerComponent } from './components';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { GroupShortListComponent } from './components/group-short-list/group-short-list.component';


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
