import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import {SharedModule} from "../shared/shared.module";
import { ChatContainerComponent } from './components/chat-container/chat-container.component';


@NgModule({
  declarations: [
    ChatContainerComponent
  ],
  imports: [
    SharedModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
