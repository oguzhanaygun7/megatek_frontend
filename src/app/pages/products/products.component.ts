import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
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
