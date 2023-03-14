import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {fadeInOnEnterAnimation, zoomInOnEnterAnimation} from "angular-animations";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    zoomInOnEnterAnimation({anchor: 'enter', duration: 500, delay: 0})
  ]
})
export class ProductsComponent implements OnInit {

  products!:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.http.get<any>('assets/json/products.json').subscribe(data => {
      this.products = data;
    })
  }

}
