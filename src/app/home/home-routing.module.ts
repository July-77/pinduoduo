import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent} from "./components";
import {HomeAuxComponent} from "./components";

const routes: Routes = [
  {path: 'home', component: HomeContainerComponent, children: [
      {path:'', redirectTo:'hot', pathMatch: 'full'},
      {path:':tabLink', component: HomeDetailComponent, children: [
          {
            path: 'aux', component: HomeAuxComponent, outlet:'second'
          },
          {path: 'grand', component: HomeGrandComponent }
        ]}
    ]},{
  path: 'change-detection',
    pathMatch:'full',
    component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
