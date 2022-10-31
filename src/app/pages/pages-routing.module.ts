import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePageComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class PagesRoutingModule { }
