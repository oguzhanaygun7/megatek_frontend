import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PagesModule} from "./pages/pages.module";
import {LayoutsModule} from "./layouts/layouts.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        LayoutsModule,
        PagesModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
