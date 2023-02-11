import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
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
