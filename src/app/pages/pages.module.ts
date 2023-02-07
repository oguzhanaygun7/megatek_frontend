import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {PagesRoutingModule} from "./pages-routing.module";
import { ProductsComponent } from './products/products.component';
import {LayoutsModule} from "../layouts/layouts.module";
import {ProductsModule} from "./products/products.module";

@NgModule({
    declarations: [
        HomePageComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        LayoutsModule,
        ProductsModule,
    ]
})
export class PagesModule {
}
