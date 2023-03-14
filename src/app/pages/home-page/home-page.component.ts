import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
    fadeInOnEnterAnimation,
    flipInYOnEnterAnimation,
    zoomInDownOnEnterAnimation,
    zoomInOnEnterAnimation
} from "angular-animations";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    animations: [
        flipInYOnEnterAnimation({anchor: 'enter', duration: 1000, delay: 0}),
        // zoomInOnEnterAnimation({anchor: 'enter', duration: 500, delay: 0})
    ]
})
export class HomePageComponent implements OnInit {

    products!:any;

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.http.get<any>('assets/json/products.json').subscribe(data => {
            console.log(data, 'data')
            this.products = data;
        })
    }

}
