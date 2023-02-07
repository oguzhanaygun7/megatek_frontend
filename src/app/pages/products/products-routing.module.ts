import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {AlbrechtComponent} from "./albrecht/albrecht.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'product/albrecht',
    component: AlbrechtComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProductsRoutingModule { }
