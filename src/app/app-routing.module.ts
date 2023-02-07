import {LOCALE_ID, NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import localeTr from "@angular/common/locales/tr"
import {LayoutsComponent} from "./layouts/layouts.component";
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from "@angular/common";

registerLocaleData(localeTr);

const routes: Routes = [
    {
        path: '',
        component: LayoutsComponent,
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload',scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: LOCALE_ID, useValue: 'tr-TR'},
    ],
})
export class AppRoutingModule {
}
