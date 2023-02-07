import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlbrechtComponent} from './albrecht/albrecht.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {RouterLink} from "@angular/router";

@NgModule({
    declarations: [
        AlbrechtComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        RouterLink
    ]
})
export class ProductsModule {
}
