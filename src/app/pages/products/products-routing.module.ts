import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {ProductComponent} from "./product/product.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'product/:name',
    data: { animation: 'enterLeavePage' },
    component: ProductComponent,
  },
  {
    path: 'detail/:name',
    component: ProductDetailComponent,
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
