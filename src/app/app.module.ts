import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule, NotificationInterceptor, ParamInterceptor} from "./home";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RecommendModule} from "./recommend";
import {MyModule} from "./my";
import {CategoryModule} from "./category";
import {ChatModule} from "./chat";
import {ProductModule} from "./product";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    RecommendModule,
    MyModule,
    CategoryModule,
    ChatModule,
    ProductModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
