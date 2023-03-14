import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {fadeInOnEnterAnimation} from "angular-animations";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    // fadeInOnEnterAnimation({anchor: 'enter', duration: 0, delay: 0}),
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
      data.forEach((product:any) => {
        if(product.routerLink == name) {
          this.brandProduct = product;
        }
      })
    })
  }
}
