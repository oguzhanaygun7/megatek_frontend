import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {
    bounceInRightOnEnterAnimation,
    fadeInOnEnterAnimation,

} from "angular-animations";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
    animations: [
        fadeInOnEnterAnimation({anchor: 'enter', duration: 300, delay: 10}),
        bounceInRightOnEnterAnimation({anchor: 'product', duration: 800, delay: 150}),
    ]
})
export class ProductDetailComponent implements OnInit {

    selectByProblem = 'CNC';
    brandName!: any;
    brandProduct!: any;
    productDetails!: any;
    selectedProduct!: any;
    pdfUrl!: any;
    showPage = false;
    dataName!: any;

    constructor(private route: ActivatedRoute,
                private sanitizer: DomSanitizer,
                private modalService: NgbModal,
                private http: HttpClient) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(data => {
            this.brandName = localStorage.getItem('brandName');
            this.dataName = data['name'];
            this.getProduct(this.brandName, this.dataName);
        })
    }

    getProduct(brandName: any, productDetailName: any) {
        this.http.get<any>('assets/json/products.json').subscribe(data => {
            this.brandProduct = data.filter((x: any) => x.routerLink === brandName)[0];
            this.productDetails = this.brandProduct.products?.filter((x: any) => x.routerLink === productDetailName)[0];
            if(this.productDetails?.routerLink == "select-by-problem") {
                console.log(this.selectByProblem)
                if(this.selectByProblem == 'CNC') {
                    this.productDetails.details = this.productDetails.details.slice(0,4);
                } else {
                    this.productDetails.details = this.productDetails.details.slice(4,8);
                }
            }
            let selectedProduct = this.productDetails.details[0].routerLink;
            this.selectedProducts(selectedProduct);
        })
    }

    selectedProducts(name: any) {
        this.selectedProduct = this.productDetails.details.filter((x: any) => x.routerLink === name)[0];
        this.showPage = true;
    }

    changeSelectedProduct(name: any) {
        this.selectedProducts(name);
    }

    openModal(staticDataModal?: any, pdfName?: any) {
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/pdf/${this.productDetails?.routerLink}/${pdfName}`);
        if (pdfName !== "none") {
            this.modalService.open(staticDataModal, {centered: true, size: 'xl'});
        }
    }

    openPdf(pdf: any) {
        if (pdf !== undefined) {
            window.open(`/assets/pdf/${this.brandProduct?.routerLink}/${pdf}`)
        }
    }

    showSectionByProduct(selectedProduct: any) {
        switch (selectedProduct?.routerLink) {
            case 'ozel-gelistirilmis-combi' :
                return false;
        }
        return true;
    }

    changeSelectedByProblem(type: string) {
        this.selectByProblem = type;
        this.getProduct(this.brandName, this.dataName);
    }
}
