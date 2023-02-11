import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {PagesRoutingModule} from "./pages-routing.module";
import { ProductsComponent } from './products/products.component';
import {LayoutsModule} from "../layouts/layouts.module";
import {ProductsModule} from "./products/products.module";
import {ContactModule} from "./contact/contact.module";
import {ContactComponent} from "./contact/contact.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {AboutUsModule} from "./about-us/about-us.module";

@NgModule({
    declarations: [
        HomePageComponent,
        ProductsComponent,
        ContactComponent,
        AboutUsComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ProductsModule,
        ContactModule,
        AboutUsModule,
        LayoutsModule
    ]
})
export class PagesModule {
}
