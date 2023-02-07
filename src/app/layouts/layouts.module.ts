import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsComponent} from './layouts.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { SubHeaderComponent } from './sub-header/sub-header.component';


@NgModule({
    declarations: [
        LayoutsComponent,
        NavbarComponent,
        FooterComponent,
        SubHeaderComponent
    ],
    exports: [
        SubHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutsModule {
}
