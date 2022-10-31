import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsComponent} from './layouts.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        LayoutsComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutsModule {
}
