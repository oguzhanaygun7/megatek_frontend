import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {fadeInOnEnterAnimation} from "angular-animations";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    fadeInOnEnterAnimation({anchor: 'enter', duration: 300, delay: 10}),
  ]
})
export class ProductComponent implements OnInit {

  brandProduct!: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.getBrandProduct(data['name']);
    })
  }

  getBrandProduct(name: any) {
    this.http.get<any>('assets/json/products.json').subscribe(data => {
      this.brandProduct = data.filter((x: any) => x.routerLink === name)[0];
    })
  }

  setBrandProductName() {
    localStorage.setItem('brandName', this.brandProduct.routerLink);
  }
}
