import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from "./products-routing.module";
import {RouterLink} from "@angular/router";
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailComponent,
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        RouterLink,
    ]
})
export class ProductsModule {
}
