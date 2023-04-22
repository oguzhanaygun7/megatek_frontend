import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from "./products-routing.module";
import {RouterLink} from "@angular/router";
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppModule} from "../../app.module";

@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailComponent,
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        RouterLink,
        NgbModule,
    ]
})
export class ProductsModule {
}
